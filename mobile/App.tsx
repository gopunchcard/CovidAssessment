import { AppRegistry } from 'react-native';
import App from './src/App';
const {name} = require('./app.json');

AppRegistry.registerComponent(name, () => App);
