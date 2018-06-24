import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../../lib/constants/Colors';

import { ActivityFeedScreen } from './ActivityFeed/ActivityFeedScreen';
import { RecordGameScreen } from './RecordGame/RecordGameScreen';
import { PlayerListScreen } from './Players/PlayerListScreen';
import { SettingsScreen } from './Settings/SettingsScreen';

const RootNavigator = TabNavigator({
    Feed: {
        screen: ActivityFeedScreen,
        navigationOptions: {
          title: 'Feed',
          headerTitle: 'Feed'
        }
    },
    Record: {
        screen: RecordGameScreen,
        navigationOptions: {
          title: 'Record Game',
          headerTitle: 'Record Game'
        }
    },
    Players: {
        screen: PlayerListScreen,
        navigationOptions: {
          title: 'Player List',
          headerTitle: 'Player List'
        }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        headerTitle: 'Settings'
      }
    }
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Feed':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Players':
            iconName = Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people';
            break;
          case 'Record':
            iconName =
              Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'md-add-circle';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-cog${focused ? '' : '-outline'}` : 'md-cog';
            break;
          default:
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  });

export class RootNavigation extends React.Component{
    render(){
        return <RootNavigator/>
    }
}