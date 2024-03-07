import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';

function Add_itens() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    formContainer: {
      paddingHorizontal: 20,
      marginTop: 30,
      
    },
    inputContainer: {
      position: 'relative',
      marginTop: 30,
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
      height: 40,
      borderRadius: 5,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 35,
    },
  });

  
  return (
    <>
      <View style={styles.container}>
        <Navbar
            icon1={<AntDesign name="arrowleft" size={24} color="white" />}
            icon2={<AntDesign name="pluscircleo" size={24} color="white" />}
            text="Cadastro de itens" colorText='white'
            backgroundColor='#FF0000'
            />

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nº Inventário *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 001"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Descrição *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Notebook"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Local * </Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Sala de reuniões"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Responsável *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: João Silva"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Data de Registro *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 10/10/10"
            />
          </View>

        </View> 
        <BottomNav backgroundColor='#FFF' iconColor='#595959' border={true}/>
      </View>
    </>
  );
}

export default Add_itens;