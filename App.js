/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import {StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';
import CodePush from 'react-native-code-push';
import StackNav from './js/navigations/StackNav';


class App extends Component{

  componentDidMount(){
    CodePush.sync();
  }

  render() {
    return (
      <StackNav/>
    );
  }
}
export default App;
