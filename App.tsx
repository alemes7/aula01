import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'seuUsuario' && password === 'suaSenha') {
      console.log("Login bem-sucedido!");
    } else {
      console.log("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>Bem-vindo ao App de Login!</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    marginBottom: 20,
    fontSize: 18,
  },
  border: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    width: 300,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default App;
