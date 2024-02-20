import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

function App() {
  return (
    <View>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
        />
        <Image
          source={require('./assets/logo-senai.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Bem Vindo(a)</Text>
      </View>
      <View style={styles.cadastro}>
      <Text style={styles.input}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
        />
        <Text style={styles.input}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
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

  
  logo: {
    marginTop: 65,
    width: 200,
    height: 51,
  },

  text : {
    color: 'white',
    marginBottom: 40,
    marginTop: 10,
    fontSize: 20,
  },

  cadastro : {
    margin:20,
    marginBottom: 0,
    fontSize: 16,
  },

  input :{
    margin: 15,
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 10,
  },


  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
