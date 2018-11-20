/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,TextInput,StatusBar,ViewPagerAndroid,TouchableOpacity} from 'react-native';
import { red } from 'ansi-colors';
// import {connect} from 'react-redux';
// import {getAddItem,getRemoveItem,getChangeInputValue} from './js/store/actionCreator';

class App extends Component{


  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.but}>
          <Button
            color ={'red'}
            title = {'测试点击按钮'}
            onPress = {()=>{
                // alert('我被点击了');
            }}
          />
        </View>
        <TouchableOpacity 
          style = {styles.numtext}
          onPress = {()=>{
            alert('dier');
          }}
          >
          <Text>NUMTWO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  but:{
    margin:20,
    width:100,
  },
  numtext:{
    width:100,
    height:35,
    margin:20,
    backgroundColor:'#0000ff'
  }
});
export default App;
