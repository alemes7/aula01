import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


function Header({backgroundColor, text}) {
  return (
    <View>
      <View style={{...styles.container, backgroundColor: backgroundColor }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
        />
        <Image
          source={require('../assets/logo-senai.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
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
        marginTop: 70,
        width: 200,
        height: 51,
      },
    
  });

export default Header;