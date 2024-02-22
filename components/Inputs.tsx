// components/Inputs.tsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function Inputs() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite aqui"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },

    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
});

export default Inputs;
