import React ,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

class MainPage extends Component{

  render(){
    return(
      <View style = {styles.container}>
        <Text>MainPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default MainPage;