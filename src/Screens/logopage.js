import React from 'react';
import { StyleSheet } from "react-native";

import {Button, ImageBackground, View,Image,Dimensions} from 'react-native';
const {width} = Dimensions.get('window')
//const imag = "..../assets/1-Logo.jpg";
const Logopage = () =>{
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./1-Logo.jpg')} style={styles.image}>

        </ImageBackground>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:width,
      //flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },

    
  });
  

export default Logopage;