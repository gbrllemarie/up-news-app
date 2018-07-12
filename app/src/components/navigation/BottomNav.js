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
             tabBarIcon: ({tintColor}) => {return(<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-megaphone-outline' : 'md-megaphone'} color={tintColor} size={24}/>);}
             },
     },
     Breakthroughs: {
       screen: BreakthroughsPage,
       navigationOptions: {
        tabBarLabel: 'Breakthroughs',    
        tabBarIcon: ({tintColor}) => {return(<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-bulb-outline' : 'md-bulb'} color={tintColor} size={24}/>);}
        }
     },
     Profiles: {
      screen: ProfilesPage,
      navigationOptions: {
       tabBarLabel: 'Profiles',
       tabBarIcon: ({tintColor}) => {return(<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-contacts-outline' : 'md-contacts'} color={tintColor} size={24}/>);}
       }

     }
 }, {
     initialRouteName: 'Home',
     order: ['Home','Announcements','Breakthroughs','Profiles'],
     navigationOptions: {
         tabBarVisible: true
     },
     tabBarOptions: {
         activeTintColor:  '#800000',
         inactiveTintColor: 'grey'
    }
 });