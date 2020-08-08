import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Logopage from './src/Screens/logopage.js';
// import PNumber from './src/Screens/pNumber.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './Navigation/drawerNavigator';
//comment
const App = () => {
  return (
   <NavigationContainer>
     <MyDrawer/>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container:{
//     flex : 1,
//     alignItems: "center",
//     justifyContent : "center",
//   }
// });

export default App;
