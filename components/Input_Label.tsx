import React from 'react';
import { View, StyleSheet, Text, TextInput, TextInputProps } from 'react-native';
import { useState } from 'react';

interface InputLabelProps extends TextInputProps {
    text: string;
}

function InputLabel({ text, ...props }: InputLabelProps) {
    const [hover, setHover] = useState("#5D5C5C");
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
            borderColor: hover,
            borderWidth: 1,
            paddingLeft: 35,
        },

        text: {
            color: 'red',
        }
    });

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{text}<Text style={styles.text}> *</Text></Text>
                <TextInput
                    {...props}
                    onFocus={() => {
                        setHover("#F39200")
                    }}
                    onBlur={() => {
                        setHover("#5D5C5C")
                    }}
                    style={styles.input}
                />
            </View>
        </View>
    );
}

export default InputLabel;