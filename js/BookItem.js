import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class BookItem extends Component{

  render(){
    return(
      <View style = {styles.root}>
        <Text>{'BookItem'}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});