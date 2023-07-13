import React from 'react';
import { Text, View, Button, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Mapas from './src/mapas/mapas';

export default function App() {
  return (
    <View style={styles.container}>
      <Mapas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
