import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Botao from '../components/Botao';
import Inputs from '../components/Inputs';

function Login() {
  return (
    <View style={styles.container}>
      <Header text="Login" backgroundColor="#000000" />
      <Text style={styles.text}>Faça Login para Acessar o Sistema!</Text>
      <Inputs text="Email:" placeholder="Insira seu email:" />
      <Inputs text="Senha:" placeholder="Insira sua senha:" secureTextEntry/>
      <Botao text="Cadastre-se" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
            <Text style={styles.button}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.button}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom: 15,
    marginTop: 40,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: 320,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 20,
  },

  button: {
    color: '#011E83',
    fontSize: 14,
  }
});

export default Login;
