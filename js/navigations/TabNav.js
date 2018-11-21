import React from 'react';
import {StyleSheet,Image,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {BottomTabNavigatorConfig} from './navigateConfig';
import MainPage from '../pages/main';
import Mypage from '../pages/mine';

const TabNav = createBottomTabNavigator({
  MainPage:{screen:MainPage,navigationOptions:{
    title:'首页',
    tabBarIcon:({tintColor})=>{
      return (
        <Image
          style ={[styles.tabBar,{tintColor:tintColor}]}
          source = {require('../../resource/Images/icon_book.png')}
        />
      );
    }
  }},
  Mypage:{screen:Mypage,navigationOptions:{
    title:'我的',
    tabBarIcon:({tintColor})=>{
      return (
        <Image
          style ={[styles.tabBar,{tintColor:tintColor}]}
          source = {require('../../resource/Images/icon_my.png')}
        />
      );
    }
  }},
},BottomTabNavigatorConfig);

const styles = StyleSheet.create({
  tabBar:{
    height:22,
    width:22,
  }
});

export default TabNav;