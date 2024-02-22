import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Botao() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default Botao;