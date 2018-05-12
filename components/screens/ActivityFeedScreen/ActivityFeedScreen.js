import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { stylesLib } from '../../../lib/StylesLib';

export class ActivityFeedScreen extends React.Component{
    render(){
        return (
            <View style={[styles.container, stylesLib.centeredScreen]}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        )
    }
}