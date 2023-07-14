import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNav';
import HamburgerScreen from '../Screens/HamburgerScreen';
import HotDogScreen from '../Screens/HotDogScreen';
import FriesScreen from '../Screens/FriesScreen';
import KetchupScreen from '../Screens/KetchupScreen';
import MustardScreen from '../Screens/MustardScreen';
import MayoScreen from '../Screens/MayoScreen';
import RelishScreen from '../Screens/RelishScreen';
import CondimentsScreen from '../Screens/CondimentsScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HamburgerStack"
        options={{ headerShown: false }}
        component={HamburgerScreen}
      />
      <Stack.Screen
        name="HotDogStack"
        options={{ headerShown: false }}
        component={HotDogScreen}
      />
      <Stack.Screen
        name="FriesStack"
        options={{ headerShown: false }}
        component={FriesScreen}
      />
      <Stack.Screen
        name="CondimentsStack"
        options={{ headerShown: false }}
        component={CondimentsScreen}
      />      
      <Stack.Screen
        name="KetchupStack"
        options={{ headerShown: false }}
        component={KetchupScreen}
      />
      <Stack.Screen
        name="MustardStack"
        options={{ headerShown: false }}
        component={MustardScreen}
      />
      <Stack.Screen
        name="MayoStack"
        options={{ headerShown: false }}
        component={MayoScreen}
      />
      <Stack.Screen
        name="RelishStack"
        options={{ headerShown: false }}
        component={RelishScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
