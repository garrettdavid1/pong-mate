import React from 'react';
import { View, Text } from 'react-native';
import { PMText } from '../../styledComponents/PMText/PMText';
import { PMTextInput } from '../../styledComponents/PMTextInput/PMTextInput';
import { stylesLib } from '../../../lib/StylesLib';
import { styles } from './styles';

export class LoginScreen extends React.Component{
    state = {
        username: '',
        password: ''
    };

    render(){
        return (
            <View style={[stylesLib.centeredScreen]}>
                <PMText style={[styles.title, stylesLib.boldText]}>Pong Mate</PMText>
                <PMTextInput
                    value={this.state.username}
                    onChangeText={(username) => { this.setState({ username }); this.fadeOutError();}}
                    placeholder='UserName'
                    autoCapitalize='none'
                />
                <PMTextInput
                    value={this.state.password}
                    onChangeText={(password) => { this.setState({ password }); this.fadeOutError();}}
                    secureTextEntry={true}
                    placeholder='Password'
                    onSubmitEditing={this.login}
                />
                <PMText style={[{color: 'yellow'}]}>Need an account?</PMText>
            </View>
        )
    }

    fadeOutError = () => {

    };

    login = () => {
        
    };
}