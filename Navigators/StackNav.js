import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HamburgerScreen from '../Screens/HamburgerScreen';
import HotDogScreen from '../Screens/HotDogScreen';
import FriesScreen from '../Screens/FriesScreen';
import KetchupScreen from '../Screens/KetchupScreen';
import MustardScreen from '../Screens/MustardScreen';
import MayoScreen from '../Screens/MayoScreen';
import RelishScreen from '../Screens/RelishScreen';
import CondimentsScreen from '../Screens/CondimentsScreen';

const Stack = createStackNavigator();

const StackNav = ( {initialScreen} ) => {
  return (
    <Stack.Navigator id="StackNav"
    initialRouteName={initialScreen}>
      <Stack.Screen
        name="HamburgerStack"
        component={HamburgerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HotDogStack"
        component={HotDogScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FriesStack"
        component={FriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CondimentsStack"
        component={CondimentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="KetchupStack"
        component={KetchupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MustardStack"
        component={MustardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MayoStack"
        component={MayoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RelishStack"
        component={RelishScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
