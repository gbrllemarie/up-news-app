import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements'

import LandingPage from '../screens/LandingPage.js';
import NewsPage from '../screens/NewsPage.js';

export default BottomNav = createBottomTabNavigator({
    Home: {
        screen: LandingPage,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => {
                <Icon name='ios-home' color={tintColor} size={24}/>
            }
        }
    },
    News: {
        screen: NewsPage,
        navigationOptions: {
            tabBarLabel: 'News',
            tabBarIcon: ({tintColor}) => {
                <Icon name='ios-paper' color={tintColor} size={24}/>
            }
        }
    }
}, {
    initialRouteName: 'Home',
    order: ['Home','News'],
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey'
    }
});