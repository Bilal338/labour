import React from 'react';
import { Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";

import {Button, ImageBackground, View,Image,Dimensions} from 'react-native';
const {width} = Dimensions.get('window')
//const imag = "..../assets/1-Logo.jpg";
const PNumber = () =>{
    return(
      //<View style={styles.container}>
        <ImageBackground source={require('./2-LogIn.jpg')} style={styles.imageBackground}>
            <View style={styles.container}>

            </View>
            <View style={styles.container}>
            <TextInput textAlign="center" placeholder="Enter Number" placeholderTextColor="grey" style={styles.text}>

            </TextInput>
            <TouchableOpacity borderColor="black" borderWidth="2">
            <Text fontSize="40" fontColor="grey" >Press Here</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    //</View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
     // width:width,
      justifyContent: "center",
     // alignContent:"center",
      alignItems:'center',
     // borderColor:'black',
      //borderWidth:5,
      //flexDirection: "column"
    },
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignContent:"center",
      //borderColor:'black',
      //borderWidth:5,
    },
    text:{
       // flex:1,
        width:width/2,
        borderBottomWidth: 1,
        justifyContent: "center",
        borderBottomColor:'black',
        alignItems:'center',
        

    },

    
  });
  

export default PNumber;