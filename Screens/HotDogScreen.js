import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HotDogScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/hotdog.png')} style={styles.image} />
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

export default HotDogScreen;
