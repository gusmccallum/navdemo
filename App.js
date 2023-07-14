import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import StackNav from './Navigators/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './Navigators/TabNav';

export default function App() {
  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
