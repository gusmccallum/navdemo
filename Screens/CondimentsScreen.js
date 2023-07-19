import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CondimentsScreen = ( {navigation} ) => {
    console.log("Navigation state is: ", navigation.getState());
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('KetchupStack')} style={styles.link}>
        <Text style={styles.linkText}>Ketchup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MustardStack')} style={styles.link}>
        <Text style={styles.linkText}>Mustard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MayoStack')} style={styles.link}>
        <Text style={styles.linkText}>Mayo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RelishStack')} style={styles.link}>
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
