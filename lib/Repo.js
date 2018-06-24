import ServiceManager from './net/ServiceManager';
import data from './data/PMData';
import http from './constants/Http';
import endpoints from './net/Endpoints';

class Repo {
    get api() {
        return Promise.resolve(this._api).then(api => (api || data.session.then( sess => {

            sess.baseURL = endpoints.apiDomain.prod;
            this._api = ServiceManager.factory({
              ...sess,
              ...{
                timeout: http.requestTimeout,
                tokenRefreshed: token => data.setApiAuthToken(token)
              }
            });

            // this._api.setBaseURL(endpoints.apiDomain.prod);
            return this._api; 
        })));
    }

    register(username, email, password){
        return this.api.then(api => {
            return api.register(username, email, password).then(response => {
                return response;
            })
        })
    }
}

// Singleton repo instance 
const instance = new Repo();
export default instance;