import { AppRegistry } from 'react-native';
import App from './App';

import EStyleSheet from 'react-native-extended-stylesheet';

AppRegistry.registerComponent('app', () => App);
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

EStyleSheet.build();