import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

type BottomNavProps = {
    backgroundColor: string;
    iconColor: string; // Adicione a propriedade para a cor dos ícones
}

function BottomNav({ backgroundColor, iconColor }: BottomNavProps) {
    const Adicionar = () => {
        alert("Adicionar");
    };

    return (
        <>
            <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
                <View style={styles.display}>
                    <FontAwesome6 name="camera-rotate" size={30} color={iconColor} />
                    <FontAwesome5 name="list-ol" size={30} color={iconColor} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        paddingBottom: 10,
    },
    display: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        paddingBottom: 10,
    },
    addButtonContainer: {
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
        marginBottom: 50,
        height: 60,
    },
});

export default BottomNav;
