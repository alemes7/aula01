import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import Botao from '../components/Botao';
import Inputs from '../components/Inputs';

function Cadastro() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        
        text : {
            marginBottom: 15,
            marginTop: 40,
            fontSize: 18,
            alignSelf: 'center',
            textAlign: 'center',
            width: 240,
          },
    });  

    return (
        <>
            <StatusBar style="dark" backgroundColor='#FF0000' />
            <ScrollView style={styles.container}>
                <Header text="Cadastre-se" backgroundColor="#FF0000" />
                <Inputs text="Nome:" placeholder="Insira seu nome:"/>
                <Inputs text="Sobrenome:" placeholder="Insira seu sobrenome:"/>
                <Inputs text="E-mail:" placeholder="Insira seu email:"/>
                <Inputs text="Telefone:" placeholder="Insira seu telefone:"/>
                <Inputs text="Senha:" placeholder="Insira sua senha:" secureTextEntry/>
                <Inputs text="Confirmar senha:" placeholder="Insira sua senha:" secureTextEntry/>
                <Botao text="Cadastre-se"/>
            </ScrollView>
        </>
    );
}


export default Cadastro;