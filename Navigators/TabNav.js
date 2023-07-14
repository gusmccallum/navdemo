import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNav from './DrawerNav';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HamburgerTab"
        options={{ headerShown: false }}
      >
        {() => <DrawerNav initialScreen="HamburgerDrawer" />}
      </Tab.Screen>
      <Tab.Screen
        name="HotDogTab"
        options={{ headerShown: false }}
      >
        {() => <DrawerNav initialScreen="HotDogDrawer" />}
      </Tab.Screen>
      <Tab.Screen
        name="FriesTab"
        options={{ headerShown: false }}
      >
        {() => <DrawerNav initialScreen="FriesDrawer" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNav;
