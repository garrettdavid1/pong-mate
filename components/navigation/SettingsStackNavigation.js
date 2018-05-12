import React from 'react';
import { StackNavigator } from 'react-navigation';

import { SettingsScreen } from '../screens/SettingsScreen/SettingsScreen';

const SettingsStackNavigator = StackNavigator({
    List: {
        screen: SettingsScreen,
        navigationOptions: {
            title: 'Settings',
            headerTitle: 'Settings'
        }
    }
})

export default class SettingsStackNavigation extends React.Component{
    render(){
        return <SettingsStackNavigator/>;
    }
}