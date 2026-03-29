import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  text: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});