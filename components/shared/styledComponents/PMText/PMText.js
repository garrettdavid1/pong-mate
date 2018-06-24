import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export class PMText extends React.Component{
    render(){
        return <Text {...this.props} style={[styles.default, this.props.style]} />;
    }
}