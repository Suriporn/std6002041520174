/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './components/App';
import AboutScreen from './components/About';
import LoginScreen from './components/Login';



AppRegistry.registerComponent(appName, () => App);
