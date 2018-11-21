import React from 'react';
import {createStackNavigator} from 'react-navigation';
import TabNav from './TabNav';
import {StackNavigatorConfig} from './navigateConfig';

const StackNav = createStackNavigator({
  TabNav:{screen:TabNav}
},StackNavigatorConfig);

export default StackNav;