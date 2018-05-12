import React from 'react';
import { StackNavigator } from 'react-navigation';

import { PlayerListScreen } from '../screens/PlayerListScreen/PlayerListScreen';

const PlayerStackNavigator = StackNavigator({
    List: {
        screen: PlayerListScreen,
        navigationOptions: {
            title: 'Players',
            headerTitle: 'Players'
        }
    }
})

export default class PlayerStackNavigation extends React.Component{
    render(){
        return <PlayerStackNavigator/>;
    }
}