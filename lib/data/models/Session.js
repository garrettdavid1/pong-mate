import endpoints from '../../net/Endpoints';

export default class Session {
    baseURL     = endpoints.apiDomain.prod;
    username      = null;
    password      = null;
    token       = null;
    pushToken   = null;
    user        = null;
}