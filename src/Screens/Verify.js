import React from 'react';
import { Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";

import {Button, ImageBackground, View,Image,Dimensions} from 'react-native';
const {width} = Dimensions.get('window')
//const imag = "..../assets/1-Logo.jpg";
const Verify = () =>{
    return(
     
        <View style={styles.container}>
            <View style={styles.Background}>
            <Text style={styles.text}>Enter Your Information</Text>
            </View>
            <TextInput textAlign="center" placeholder="Name" placeholderTextColor="grey" style={styles.text1}>

            </TextInput>
            <TextInput textAlign="center" placeholder="Gender" placeholderTextColor="grey" style={styles.text1}>

            </TextInput>
            <TextInput textAlign="center" placeholder="Email" placeholderTextColor="grey" style={styles.text1}>

            </TextInput>
            <TextInput textAlign="center" placeholder="Adress" placeholderTextColor="grey" style={styles.text1}>

            </TextInput>
            <View>

            </View>
            <Button title="DONE" style={{borderRadius:5, backgroundColor:'#ffd648'}}>

            </Button>
        </View>
    //</View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
     // width:width,
     // justifyContent: "center",
     // alignContent:"center",
     alignItems:'center',
     // borderColor:'black',
     //borderWidth:5,
     //flexDirection: "column"
    },
    Background: {
      width:width,
      height:70,
      backgroundColor:'#ffd648',
      //resizeMode: "cover",
      justifyContent: "center",
      alignItems:"center",
      borderColor:'black',
      borderBottomWidth:1,
    },
    text:{
        fontFamily:'Century Gothic',
        fontSize:32,
        color:"white" 

    },
    text1:{

        width:width/2,
        fontSize:24,
        borderBottomWidth: 1,
        justifyContent: "center",
        borderBottomColor:'black',
        alignItems:'center',
    },

    
  });
  

export default Verify;