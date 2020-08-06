import React,{useState,useEffect} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();
const Home = ({navigation}) => {
    return(
        <View styles={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'black'}}>
            <Button title="Home" onPress={()=>navigation.navigate("Settings")}>

            </Button>
        </View>
    );

}
const Settings = ({navigation}) => {
    return(
        <View styles={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button title="Settings" onPress={()=>navigation.navigate("Home")}>

            </Button>
        </View>
    );
    
}
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
export default MyStack;