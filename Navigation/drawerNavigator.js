import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './appnavigator';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;