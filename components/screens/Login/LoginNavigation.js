import React from 'react';
import { StackNavigator } from 'react-navigation';
import DismissableStackNav from '../../shared/navigation/DismissableStackNavigator';

import { LoginScreen } from './LoginScreen';

let app = null;
const LoginNavigator = StackNavigator({
    Login: { screen : props => <LoginScreen {...props} screenProps={{app: app}}/>}
},
{
    mode: 'modal',
    headerMode: 'none'
});

export class LoginNavigation extends React.Component {
    render() {
        app = this.props.app;
        return <LoginNavigator app={this.props.app} />;
    }
}