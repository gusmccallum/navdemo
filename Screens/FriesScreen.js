import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FriesScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/fries.jpg')} style={styles.image} />
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

export default FriesScreen;
