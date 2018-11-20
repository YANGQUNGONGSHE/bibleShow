/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,TextInput,StatusBar,ViewPagerAndroid} from 'react-native';
import { red } from 'ansi-colors';
// import {connect} from 'react-redux';
// import {getAddItem,getRemoveItem,getChangeInputValue} from './js/store/actionCreator';

class App extends Component{


  render() {
    // let {inputValue,list,inputChangeValue,addItemClick,deleteItemClick} = this.props;
    return (
      <ViewPagerAndroid 
        pageMargin = {20}
        peekEnabled = {true}
        style={styles.container}
        initialPage = {0}
        >
        {/* <View style ={styles.inPutContainer}>
          <TextInput 
            value = {inputValue}
            onChangeText = {inputChangeValue}
          />
          <Button
            onPress = {addItemClick}
          >提交</Button>
        </View>
          {
            list.map((item,index,arr)=> 
          <Text 
            key = {item}
            onPress = {()=>{
              // deleteItemClick(index)
            }}
            >{item}</Text>)
          } */}
          {/* <StatusBar
            barStyle = {'default'}
          /> */}
          <View style = {styles.bar} key = {1}>
            <Text>第一</Text>
          </View>
          <View style = {styles.bar} key = {2}>
            <Text>第二</Text>
          </View>
          <View style = {styles.bar} key = {3}>
            <Text>第三</Text>
          </View>
          
      </ViewPagerAndroid>
    );
  }
}

// const mapStateToProps = (state) =>{

//   return {
//     list:state.list,
//     inputValue:state.inputValue,
//   };
// };

// const mapDispatchToProps = (dispatch) =>{
//   return {

//     inputChangeValue(value){
//       const action = getChangeInputValue(value);
//       dispatch(action);
//     },
//     addItemClick(){
//       const action =  getAddItem();
//       dispatch(action);
//     },
//     deleteItemClick(index){
//       const action = getRemoveItem(index);
//       dispatch(action);
//     }
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red',
  },
  inPutContainer:{
    flexDirection:'column',
    marginBottom:20,
  },
  bar:{
    backgroundColor:'red',
    margin:20,
  }
});

// export default connect (mapStateToProps,mapDispatchToProps)(App);
export default App;
