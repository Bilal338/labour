import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Button } from 'react-native';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button title="Home" onPress={()=>navigation.navigate("Settings")}/>
        </View>
    );

}
const Settings = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button title="Settings" onPress={()=>navigation.navigate("Home")}/>
        </View>
    );
    
}
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
export default MyStack;