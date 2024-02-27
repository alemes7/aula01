import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

function Inputs({text, placeholder}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    borderColor: '#F39200',
    borderWidth: 1,
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#F5F5F5',
  },
});

export default Inputs;
