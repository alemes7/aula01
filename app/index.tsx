import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import Botao from '../components/Botao';
import Inputs from '../components/Inputs';
import { Link } from 'expo-router';
import LinkBtn from '../components/Botao';

function Login() {
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
  
  return (
    <>
      <StatusBar style="dark" backgroundColor='#FF' />
      <View style={styles.container}>
        <Header text="Login" backgroundColor="#000000" />
        <Text style={styles.text}>Faça Login para Acessar o Sistema!</Text>
        <Inputs text="Email:" placeholder="Insira seu email:" />
        <Inputs text="Senha:" placeholder="Insira sua senha:" secureTextEntry/>
        <LinkBtn text="Entrar" href="drawer"></LinkBtn>
        <View style={styles.buttonContainer}>
          <Link href="/Cadastro" asChild>
            <TouchableOpacity>
                <Text style={styles.button}>Cadastre-se</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/RecSenha" asChild>
            <TouchableOpacity>
                <Text style={styles.button}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
}

export default Login;
