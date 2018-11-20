/** @format */

import {AppRegistry} from 'react-native';
// import React from 'react';
import App from './App';
import {name as appName} from './app.json';
// import {Provider} from 'react-redux';
// import store from './js/store';

// const BibleShow = (
//     <Provider store = {store}>
//       <App/>
//     </Provider>
// )
AppRegistry.registerComponent(appName, () => App);
