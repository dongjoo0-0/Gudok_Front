import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");

  return(
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Register</Text>

      <View style={styles.items}>
        <Text>Username</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setUsername}
          text={username}
          autoCompleteType={'username'}
          textContentType={'username'}
          returnKeyType={'next'}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}}>중복 확인</Text>
        </TouchableOpacity>
        <Text>Password</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setPassword}
          text={password}
          secureTextEntry={true}
          autoCompleteType={'password'}
          textContentType={'password'}
          returnKeyType={'next'}
        />
        <Text>Password check</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setCheckPwd}
          text={checkPwd}
          secureTextEntry={true}
          autoCompleteType={'password'}
          textContentType={'password'}
          returnKeyType={'done'}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title : {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  items: {
    padding: 30,
    height: 400,
    justifyContent: 'space-between',
  },
  button : {
    alignSelf: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
  }
});