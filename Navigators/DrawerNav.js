import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HamburgerScreen from '../Screens/HamburgerScreen';
import HotDogScreen from '../Screens/HotDogScreen';
import FriesScreen from '../Screens/FriesScreen';
import CondimentsScreen from '../Screens/CondimentsScreen';
import StackNav from './StackNav';
import KetchupScreen from '../Screens/KetchupScreen';

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
      <Drawer.Screen name="HamburgerDrawer" component={HamburgerScreen}/>
      <Drawer.Screen name="HotDogDrawer" component={HotDogScreen}/>
      <Drawer.Screen name="FriesDrawer"component={FriesScreen}/>
      <Drawer.Screen name="CondimentsDrawer" component={CondimentsScreen}/>
      <Drawer.Screen name="KetchupDrawer" component={KetchupScreen}/>
    </Drawer.Navigator>
  );
};


export default DrawerNav;
