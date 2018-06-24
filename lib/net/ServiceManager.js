import * as axios from "axios";
import * as PMError from './NetErrors';
import { requestLogger, responseLogger } from './Interceptors';
import endpoints from './Endpoints';

export default class ServiceManager {
    static factory(config){
        return new ServiceManager(config);
    }

    setBaseURL(url) {
        this.config.baseURL = url;
        return url;
    }

    setApiAuthToken(token) {
        this.config.token = token;
        return token;
    }

    constructor(config) {
        this.config = config;
        this.net = axios.create({
            baseURL: endpoints.apiDomain.prod
        });

        this.net.defaults.headers.post['Content-Type'] = 'application/json';

        this.net
            .interceptors
            .request 
            .use(requestLogger, e => console.log(e));

        this.net
            .interceptors
            .response
            // .use(responseLogger, e => console.log(e));
            .use(responseLogger, error => this.responseErrorInterceptor(error));
    }

    makeRequest(config, authenticated = true) {
        if(!this.config) {
            throw new PMError.NetErrorMissingConfiguration('Service Configuration Not Provided!');
        }
       
        let request = { ...config, ...this.config, 
            ...(authenticated ? { headers : {'Authorization': `Bearer ${this.config.token}` }} : {}) };
        return this.net(request);
    }

    responseErrorInterceptor(error) {
        const originalRequest = error.config;

        /**
         * Always log the response
         */
        responseLogger(error.response);

        /**
         * If this is a 403 and the url is the login url, 
         * then return NetErrorInvalidCredentials with the Message 
         * returned by the endpoint.  
         */
        if(error.response.status === 403 && error.response.request.url.toLowerCase().includes(endpoints.login.url.toLowerCase())) {
            return Promise.reject(new PMError.NetErrorInvalidCredentials(error.response.data.Message));
        }

        /**
         * This must be an endpoint other than login. 
         * We need to check for a valid Authorization header 
         */
        else if(error.response.status === 403 && !originalRequest._retry) {

            if(!this.config.username || !this.config.password) {
                return Promise.reject(new PMError.NetErrorInvalidCredentials('Credentials undefined in refreshToken attempt!'));
            }

            /**
             * Currently we are just setting the retry flag, but 
             * might need to increment a counter to support multuple attempts.
             */
            originalRequest._retry = true;

            /**
             * Make an attempt to fetch a new auth token from the login endpoint.
             * then return a new request assembled by 'makeRequest' which will use 
             * the new token set by the refresh/login methods. 
             */
            if(!this._refreshing) {
               console.log(`Service.responseErrorInterceptor initiating Refresh: ${this._refreshing}`);

                /**
                 * Set the refreshing flag, and ensure any previous errors are 
                 * cleared. 
                 */
                this._refreshing = true;
                this._refreshError = undefined;

                this
                    /**
                     * Initiate the token refresh 
                     */
                    .refreshToken()
                    
                    /**
                     * Upon success, clear the refreshing flag 
                     */
                    .then(response => {
                        this._refreshing = false;
                    })


                    .catch(error => {
                        this._refreshing = false;
                        this._refreshError = error;
                    });
            }
            
            return new Promise( (resolve, reject) => {
                let id = setInterval( () => {
                    if(!this._refreshing) {
                        if(!this._refreshError) {
                            resolve(this.makeRequest(originalRequest));
                        }
                        else {
                            reject(error);
                        }                         
                        
                        clearInterval(id);
                    }
                }, 250);
            });
        }
               
        /** 
         * All other 403's 
         */
        else if(error.response.status === 403) {
            return Promise.reject(new PMError.NetErrorNotAuthorized(error.response.data.Message));
        }


        /**
         * This is currently an unsupported error, so allow it to fall through.
         */
        return Promise.reject(error);
    }

    /**
     * Helper for login with credentials. Checks for 
     * consumer token refresh callback, and passes any result
     * from a token refresh to that handler.   
     * 
     * @returns {Promise<any>} 
     */
    refreshToken() {
        return this
            .login(this.config.username, this.config.password)
            .then( response => {
                if(this.config.tokenRefreshed) {
                    this.config.tokenRefreshed(response.data.Data.token);
                }
                return response;
            });
    }

    register(userName, email, password) {
        let request = { ...endpoints.register,
            ...{ data : {
                userName,
                email, 
                password
            }}
        };

        return this
            .makeRequest(request, false)
            .then( response => {
                // this.config.username = username;
                // this.config.email = email;
                // this.config.password = password;

                return response;
            })
    }
}