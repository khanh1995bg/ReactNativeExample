/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {getRandomWeather} from './src/lib/'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
