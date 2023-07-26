import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import StackNav from './StackNav';


const Drawer = createDrawerNavigator();
const DrawerNav = ({ initialScreen}) => {
  return (
    <Drawer.Navigator id="DrawerNav"
      initialRouteName={initialScreen}
      screenOptions={{
        headerTitle: "Gus' Restaurant",
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen name="HamburgerDrawer"> 
      {() => <StackNav initialScreen="HamburgerStack" />}
      </Drawer.Screen>
      <Drawer.Screen name="HotDogDrawer"> 
      {() => <StackNav initialScreen="HotDogStack" />}
      </Drawer.Screen>
      <Drawer.Screen name="FriesDrawer">
      {() => <StackNav initialScreen="FriesStack" />}
        </Drawer.Screen>
      <Drawer.Screen name="CondimentsDrawer"> 
      {() => <StackNav initialScreen="CondimentsStack" />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginBottom: 10,
  },
  linkText: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default DrawerNav;
