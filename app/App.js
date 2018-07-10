/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import LandingPage from './src/components/screens/LandingPage.js';
import BottomNav from './src/components/navigation/BottomNav.js';

export default class App extends Component {
  render() {
    return (
      <BottomNav/>
    );
  }
}