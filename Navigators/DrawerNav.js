import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator();

const DrawerNav = ({ initialScreen }) => {
  return (
    <Drawer.Navigator
      initialRouteName={initialScreen}
      screenOptions={{
        headerTitle: "Gus' Restaurant",
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen name="HamburgerDrawer">
        {() => <TabNav initialScreen="HamburgerTab" />}
      </Drawer.Screen>
      <Drawer.Screen name="HotDogDrawer">
        {() => <TabNav initialScreen="HotDogTab" />}
      </Drawer.Screen>
      <Drawer.Screen name="FriesDrawer">
        {() => <TabNav initialScreen="FriesTab" />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNav;
