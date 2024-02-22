import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

function Header() {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} />
        <Text style={styles.text}>Bem Vindo(a)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'red',
        alignItems: 'center',
        color: 'white',
    
      },

    text : {
        color: 'white',
        marginBottom: 31,
        marginTop: 10,
        fontSize: 20,
      },

      logo : {
        width: 200,
        height: 51,
      },
    
  });

export default Header;