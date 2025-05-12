import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Hello, Lumiar!</Text>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#00838F',
  },
});
