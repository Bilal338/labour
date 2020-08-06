import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logopage from './src/Screens/logopage.js';
import PNumber from './src/Screens/pNumber.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Navigation/appnavigator';
//comment
const App = () => {
  return (
    //<Logopage></Logopage>
   // <PNumber></PNumber>
   
   <NavigationContainer>{<MyStack></MyStack>}</NavigationContainer>

    // <View style={styles.container} >
    //   <Text>React Native</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex : 1,
    alignItems: "center",
    justifyContent : "center",
  }
});

export default App;
