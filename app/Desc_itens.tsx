import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/PatrimonioBar';
import { MaterialIcons } from '@expo/vector-icons';
import BottomNav from '../components/Input';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Adicionar() {
    alert("Adicionar");
}

function Desc_itens() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },

        content: {
            backgroundColor: '#FBFBFB',
            height: 550,
        },

        addButtonContainer: {
            position: 'absolute',
            bottom: 20,
            right: 0,
            margin: 20,
            marginBottom: 50,
            height: 60,
        },

        title: {
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 25,
            marginLeft: 20,
        },

        desc_item: {
            fontSize: 20,
            marginLeft: 20,
            marginTop: 10,
            color: '#595959',
        },


    });

    return (
        <View style={styles.container}>
            <Navbar
                icon1={<AntDesign name="arrowleft" size={30} color="white" />}
                icon2={<MaterialIcons name="refresh" size={30} color="white" />}
                text="Descrição do item" colorText='white'
                backgroundColor='#FF0000'
            />
            <View style={styles.content}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 20, marginTop: 50 }}>Nº do Inventário:</Text>
                <Text style={styles.desc_item}>957689</Text>
                <Text style={styles.title}>Descrição:</Text>
                <Text style={styles.desc_item}>CADEIRA GIRATÓRIA</Text>
                <Text style={styles.title}>Local:</Text>
                <Text style={styles.desc_item}>SALA C13</Text>
                <Text style={styles.title}>Responsável:</Text>
                <Text style={styles.desc_item}>CARLOS</Text>
                <Text style={styles.title}>Data de Registro:</Text>
                <Text style={styles.desc_item}>05/03/2024</Text>
            </View> 
            <View style={styles.addButtonContainer}>
                <MaterialCommunityIcons name="pencil-circle" size={50} color="red" onPress={Adicionar} />
            </View>

            <BottomNav backgroundColor='#FFF' iconColor='#595959' border={1} />
        </View>
    );
}

export default Desc_itens;