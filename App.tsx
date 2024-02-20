import { Alert, StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

function App() {
  const link = () => {
    Alert.alert('Página indisponivel!', 'Ainda em desenvolvimento, aguarde...',[{text: 'OK'}]);
  };

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
          placeholder="Digite seu email:"
          placeholderTextColor="#575757"
        />
        <Text style={styles.input}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha:"
          placeholderTextColor="#575757"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <Text style={styles.linkText} onPress={link}>
          Não possui conta? Cadastre-se
        </Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Login com Google')}>
            <FontAwesome name="google" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Login com Facebook')}>
            <FontAwesome5 name="facebook" size={30} color="black" />
          </TouchableOpacity>
        </View>
        
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
    marginTop: 70,
    width: 200,
    height: 51,
  },

  text : {
    color: 'white',
    marginBottom: 31,
    marginTop: 10,
    fontSize: 20,
  },

  cadastro : {
    margin:20,
    marginBottom: 0,
    fontSize: 16,
  },

  input :{
    fontSize: 16,
    margin: 15,
    marginLeft: 0,
    marginRight: 0,
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
    fontSize: 20,
  },

  linkText: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'none',
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    gap: 5,
  },

  iconButton: {
    padding: 10,
    alignItems: 'center',
  },
});

export default App;
