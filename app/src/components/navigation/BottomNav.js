import React from 'react';
import {TabNavigator} from 'react-navigation';

import LandingPage from '../screens/LandingPage.js';
import NewsPage from '../screens/NewsPage.js';

export default BottomNav =  TabNavigator({
    Home: LandingPage,
    News: NewsPage,
  });