import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, Alert } from 'react-native';

export default function App() {
  const pressedMe = () => {
    Alert.alert("Proxima", "You pressed proxima! dude!", [{text:"OK"}]);
  }
  
  return (
    <View style={styles.container}>
      <ActivityIndicator style={{paddingStart:10}} size="large" color="green"></ActivityIndicator>
      <Text>Test TEST</Text>
      <Button title="Press Me" onPress={pressedMe}></Button>
      <StatusBar style="auto" />
    </View>
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
