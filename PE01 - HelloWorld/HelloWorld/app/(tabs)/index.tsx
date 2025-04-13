import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
      <View style={styles.viewContainer}>
        <Text style={styles.message}>Sumit K C</Text>
        <Text style={styles.message}>MSCS</Text>
        <Text style={styles.message}>STC</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    fontSize: 26,
    textAlign: 'center',
  },
});
