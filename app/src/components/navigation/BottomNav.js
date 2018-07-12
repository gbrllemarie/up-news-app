import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';


import { Icon } from 'react-native-elements';

import LandingPage from '../screens/LandingPage.js';
import AnnouncementsPage from '../screens/AnnouncementsPage';


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
//     Announcements: {
//         screen: AnnouncementsPage,
//         navigationOptions: {
//             tabBarLabel: 'Announcements',
//             }
//         }
//     }
// }, {
//     initialRouteName: 'Home',
//     order: ['Home','Announcements'],
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
  AnnouncementsPage: { screen: AnnouncementsPAge }
}, {
  initialRouteName: 'LandingPage',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});

