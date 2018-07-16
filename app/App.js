/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import ArticleView from './src/components/screens/ArticleView.js';
import BottomNav from './src/components/navigation/BottomNav.js';

export default class App extends Component {
  render() {
    return (
     <BottomNav/>
    );
  }
}