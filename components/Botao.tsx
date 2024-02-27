import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Botao({text}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },

    button: {
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 5,
        width: '90%',
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default Botao;