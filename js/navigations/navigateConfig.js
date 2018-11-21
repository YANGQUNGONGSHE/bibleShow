
export const BottomTabNavigatorConfig = {
  initialRouteName:'MainPage',
  tabBarOptions:{
    activeTintColor:'#F8F8FF',
    inactiveTintColor:'#9e9e9e',
    style:{
      backgroundColor:'#473C8B',
    },
    labelStyle:{
      fontSize:14,
      fontWeight:'bold',
      paddingBottom:3,
    }
  }
};

export const StackNavigatorConfig = {
  initialRouteName:'TabNav',
  mode:'card',
  headerMode:'screen',
};