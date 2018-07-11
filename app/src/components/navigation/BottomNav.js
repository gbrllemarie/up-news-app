import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';

import LandingPage from '../screens/LandingPage.js';
import NewsPage from '../screens/NewsPage.js';

export default BottomNav = createBottomTabNavigator({
    Home: LandingPage,
    News: NewsPage,
  } , {
      swipeEnabled: true
  }
);