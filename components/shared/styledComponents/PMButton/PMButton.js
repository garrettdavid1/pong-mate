import React from 'react';
import { TouchableOpacity } from 'react-native';
import { PMText } from '../PMText/PMText';
import { styles } from './styles';

export class PMButton extends React.Component{
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.button, this.props.style]}>
                <PMText style={[styles.buttonText, this.props.textStyle]}>{this.props.text || this.props.children}</PMText>
            </TouchableOpacity>
        )
    }
}