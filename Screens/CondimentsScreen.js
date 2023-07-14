import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CondimentsScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('KetchupStack')} style={styles.link}>
        <Text style={styles.linkText}>Ketchup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('MustardStack')} style={styles.link}>
        <Text style={styles.linkText}>Mustard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('MayoStack')} style={styles.link}>
        <Text style={styles.linkText}>Mayo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('RelishStack')} style={styles.link}>
        <Text style={styles.linkText}>Relish</Text>
      </TouchableOpacity>
    </View>
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

export default CondimentsScreen;
