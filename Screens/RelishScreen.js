import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const RelishScreen = ({ navigation }) => {
    console.log("Navigating to relish screen!!!");
  return (
    <View style={styles.container}>
      <Image source={require('../assets/relish.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default RelishScreen;
