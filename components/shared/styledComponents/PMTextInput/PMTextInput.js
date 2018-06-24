import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

export class PMTextInput extends React.Component{
    render(){
        return <TextInput {...this.props} style={[styles.default, this.props.style]} />;
    }
}