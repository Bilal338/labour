import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button } from 'react-native';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

// const Home = ({navigation}) => {
//     return(
//         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//             <Button title="Home" onPress={()=>navigation.navigate("Settings")}/>
//         </View>
//     );

// }
const Settings = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button title="Settings" onPress={()=>navigation.navigate("Home")}/>
        </View>
    );
    
}

const CustomHeader = ({navigation})=>(
  <View 
    style={{
      height:55,
      backgroundColor:"red",
      flexDirection:"row",
      elevation:4,
      justifyContent:"space-between",
      alignItems:"center",
      padding:15
    }} 
  >
    <Icon name="menu" color="white" size={30} onPress={()=>navigation.openDrawer()} />
  </View>
)


function MyStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        header:(props)=><CustomHeader {...props} />
      }} 
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
export default MyStack;