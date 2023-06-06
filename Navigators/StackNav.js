import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HamburgerStack"
        options={{ headerShown: false }}
      >
        {() => <DrawerNav initialScreen="HamburgerDrawer" />}
      </Stack.Screen>
      <Stack.Screen
        name="HotDogStack"
        options={{ headerShown: false }}
      >
        {() => <DrawerNav initialScreen="HotDogDrawer" />}
      </Stack.Screen>
      <Stack.Screen
        name="FriesStack"
        options={{ headerShown: false }}
      >
        {() => <DrawerNav initialScreen="FriesDrawer" />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNav;
