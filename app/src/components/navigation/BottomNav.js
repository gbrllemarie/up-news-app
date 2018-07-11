import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements'

import LandingPage from '../screens/LandingPage.js';
import NewsPage from '../screens/NewsPage.js';

// export default BottomNav = createBottomTabNavigator({
//     Home: {
//         screen: LandingPage,
//         navigationOptions: {
//             tabBarLabel: 'Home',
//             tabBarIcon: ({tintColor}) => {
//                 <Icon name='ios-home' color={tintColor} size={24}/>
//             }
//         }
//     },
//     News: {
//         screen: NewsPage,
//         navigationOptions: {
//             tabBarLabel: 'News',
//             }
//         }
//     }
// }, {
//     initialRouteName: 'Home',
//     order: ['Home','News'],
//     navigationOptions: {
//         tabBarVisible: true
//     },
//     tabBarOptions: {
//         activeTintColor: 'red',
//         inactiveTintColor: 'grey'
//     }
// });

export default createBottomTabNavigator({
  LandingPage: {
    screen: LandingPage,
    icon: 'bookmark'},
  NewsPage: { screen: NewsPage }
}, {
  initialRouteName: 'LandingPage',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});