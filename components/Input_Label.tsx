import React from 'react';
import { View, StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

interface InputLabelProps extends TextInputProps {
    text: string;
}

function InputLabel({ text, ...props }: InputLabelProps) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        formContainer: {
            paddingHorizontal: 20,
            marginTop: 35,

        },
        inputContainer: {
            position: 'relative',
        },
        label: {
            position: 'absolute',
            backgroundColor: 'white',
            paddingHorizontal: 8,
            top: -6,
            left: 12,
            zIndex: 1,
            fontSize: 12,
            maxWidth: 110,

        },
        input: {
            height: 47,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
            paddingLeft: 35,
        },
    });

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{text}</Text>
                <TextInput
                    {...props}
                    style={styles.input}
                />
            </View>
        </View>
    );
}

export default InputLabel;