import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import LandingPage from '../screens/LandingPage.js';
import Announcements from '../screens/Announcements.js';
import Breakthroughs from '../screens/Breakthroughs.js';
import Profiles from '../screens/Profiles.js';
import ArticleView from '../screens/ArticleView.js';
import SavedPage from '../screens/SavedPage.js';

const NewsStack = createStackNavigator(
    {
        News: { screen: LandingPage },
        ArticleView: { screen: ArticleView }
    }, {
        headerMode: 'none'
    }
);

const AnnouncementsStack = createStackNavigator(
    {
        Announcements: { screen: Announcements },
        ArticleView: { screen: ArticleView }
    }, {
        headerMode: 'none'
    }
);

const BreakthroughsStack = createStackNavigator(
    {
        Breakthroughs: { screen: Breakthroughs },
        ArticleView: { screen: ArticleView }
    }, {
        headerMode: 'none'
    }
);

const ProfilesStack = createStackNavigator(
    {
        Profiles: { screen: Profiles },
        ArticleView: { screen: ArticleView }
    }, {
        headerMode: 'none'
    }
);

export default BottomNav = createBottomTabNavigator(
    {
        Home: {
            screen: NewsStack,
            navigationOptions: {
                category: 'news',
                tabBarLabel: 'News',
                tabBarIcon: ({ tintColor }) => { return (<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-paper-outline' : 'md-paper'} color={tintColor} size={24} />); }
            }
        },
        Announcements: {
            screen: AnnouncementsStack,
            navigationOptions: {
                category: 'announcements',
                tabBarLabel: 'Announcements',
                tabBarIcon: ({ tintColor }) => { return (<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-megaphone-outline' : 'md-megaphone'} color={tintColor} size={24} />); }
            },
        },
        Breakthroughs: {
            screen: BreakthroughsStack,
            navigationOptions: {
                tabBarLabel: 'Breakthroughs',
                tabBarIcon: ({ tintColor }) => { return (<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-bulb-outline' : 'md-bulb'} color={tintColor} size={24} />); }
            }
        },
        Profiles: {
            screen: ProfilesStack,
            navigationOptions: {
                tabBarLabel: 'Profiles',
                tabBarIcon: ({ tintColor }) => { return (<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-contacts-outline' : 'md-contacts'} color={tintColor} size={24} />); }
            }
        },
        Saved: {
            screen: SavedPage,
            navigationOptions: {
                tabBarLabel: 'Saved',
                tabBarIcon: ({ tintColor }) => { return (<Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-bookmark-outline' : 'md-bookmark'} color={tintColor} size={24} />); }
            }
        }
    }, {
        initialRouteName: 'Home',
        order: ['Home', 'Announcements', 'Breakthroughs', 'Profiles', 'Saved'],
        navigationOptions: {
            tabBarVisible: true
        },
        tabBarOptions: {
            activeTintColor: '#800000',
            inactiveTintColor: 'grey'
        }
    });
