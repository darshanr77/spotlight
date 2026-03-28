import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    gap: 30,                    // Nice spacing between elements
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#439aa7',   // Nice teal background
    borderRadius: 12,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});