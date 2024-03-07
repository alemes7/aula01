import React from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';
import { useState } from 'react';

interface InputsProps extends TextInputProps{
  text: string;
}

function Inputs({text, ...props} : InputsProps) {
  const [hover, setHover] = useState("#F5F5F5");
  const styles = StyleSheet.create({
    container: {
      margin: 18,
    },
    label: {
      marginBottom: 5,
      fontSize: 16,
    },
    input: {
      padding: 10,
      borderRadius: 5,
      marginTop: 5,
      backgroundColor: '#F5F5F5',
      borderWidth: 1,
      borderColor: hover
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <TextInput {...props} style={styles.input} placeholderTextColor="#808080" />
    </View>
  );
}


export default Inputs;
