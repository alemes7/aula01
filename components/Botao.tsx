import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type ButtonProps = {
    text: string;
}

function Botao({text} : ButtonProps) {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: 20,
        },
    
        button: {
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            width: '90%',
        },
    
        buttonText: {
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
        },
    });
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}


export default Botao;