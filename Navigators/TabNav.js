import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HamburgerScreen from '../Screens/HamburgerScreen';
import HotDogScreen from '../Screens/HotDogScreen';
import FriesScreen from '../Screens/FriesScreen';

const Tab = createBottomTabNavigator();

const TabNav = ({ initialScreen }) => {
  return (
    <Tab.Navigator initialRouteName={initialScreen}>
      <Tab.Screen
        name="HamburgerTab"
        component={HamburgerScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="HotDogTab"
        component={HotDogScreen}
        options={{ headerShown: false }}
      />
      Um... cheesed to beat you?
      
      <Tab.Screen
        name="FriesTab"
        component={FriesScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
