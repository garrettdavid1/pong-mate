import { SecureStore } from 'expo';
import keys from '../constants/Keys';
import Session from './models/Session';

class PMData {

    setSession(obj) {
        return SecureStore
            .setItemAsync(keys.session, JSON.stringify(obj))
            .then(() => obj);
    }

    get session() {
        return SecureStore.getItemAsync(keys.session).then( sess => 
            (sess ? JSON.parse(sess) : this.setSession(new Session())));
    }

    setBaseURL(url) {
        return this.session.then( sess => {
            sess.baseURL = url;
            return this.setSession(sess);
        });
    }

    setApiAuthToken(token) {
        return this.session.then( sess => {
            sess.token = token;
            return this.setSession(sess);
        });
    }

    setPushNotificationToken(token) {
        return this.session.then( sess => {
            sess.pushToken = token;
            return this.setSession(sess);
        });
    }
}

const data = new PMData();
export default data;