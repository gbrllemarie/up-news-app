import React from 'react';
import {Platform} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import LandingPage from '../screens/LandingPage.js';
import AnnouncementsPage from '../screens/AnnouncementsPage';
import BreakthroughsPage from '../screens/BreakthroughsPage.js';
import ProfilesPage from '../screens/ProfilesPage.js';


 export default BottomNav = createBottomTabNavigator({
     Home: {
         screen: LandingPage,
         navigationOptions: {
             tabBarLabel: 'News',
         tabBarIcon: ({tintColor}) => {return(<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-paper-outline' : 'md-paper'} color={tintColor} size={24}/>);}
      
         }
     },
     Announcements: {
         screen: AnnouncementsPage,
         navigationOptions: {
             tabBarLabel: 'Announcements',
             }
     },
     Breakthroughs: {
       screen: BreakthroughsPage,
       navigationOptions: {
        tabBarLabel: 'Breakthroughs',
        }
     },
     Profiles: {
      screen: ProfilesPage,
      navigationOptions: {
       tabBarLabel: 'Profiles',
       }

     }
 }, {
     initialRouteName: 'Home',
     order: ['Home','Announcements','Breakthroughs','Profiles'],
     navigationOptions: {
         tabBarVisible: true
     },
     tabBarOptions: {
         activeTintColor: 'red',
         inactiveTintColor: 'grey'
    }
 });