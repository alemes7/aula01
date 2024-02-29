import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

type InputsProps = {
  text: string;
  placeholder: string;
}

function Inputs({text, placeholder} : InputsProps) {
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
    margin: 18,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderColor: '#F5F5F5',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#F5F5F5',
  },
});

export default Inputs;
