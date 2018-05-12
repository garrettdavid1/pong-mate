import React from 'react';
import { StackNavigator } from 'react-navigation';

import { ActivityFeedScreen } from '../screens/ActivityFeedScreen/ActivityFeedScreen';

const FeedStackNavigator = StackNavigator({
    Feed: {
        screen: ActivityFeedScreen,
        navigationOptions: {
            title: 'Activity Feed',
            headerTitle: 'Activity Feed'
        }
    }
})

export default class FeedStackNavigation extends React.Component{
    render(){
        return <FeedStackNavigator/>;
    }
}