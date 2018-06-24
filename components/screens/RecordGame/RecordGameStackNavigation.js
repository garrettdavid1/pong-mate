import React from 'react';
import { StackNavigator } from 'react-navigation';

import { RecordGameScreen } from './RecordGameScreen';

const RecordGameStackNavigator = StackNavigator({
    List: {
        screen: RecordGameScreen,
        navigationOptions: {
            title: 'Record Game',
            headerTitle: 'Record Game'
        }
    }
})

export default class RecordGameStackNavigation extends React.Component{
    render(){
        return <RecordGameStackNavigator/>;
    }
}