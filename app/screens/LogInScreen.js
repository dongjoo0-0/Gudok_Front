import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { Link } from '@react-navigation/native';

export default LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return(
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setUsername}
        text={username}
        autoCompleteType={'username'}
        textContentType={'username'}
      />
      <Text>Password</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setPassword}
        text={password}
        autoCompleteType={'password'}
        textContentType={'password'}
      />
      <Text>Don't you have an account?</Text>
      <Link to={{screen : 'Register'}}>Register here.</Link>
      <Button title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});