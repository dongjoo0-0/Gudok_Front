import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if(!email) {
      alert("이메일을 입력하지 않았습니다.");
      return;
    }
    if(!password) {
      alert("비밀번호를 입력하지 않았습니다.");
      return;
    }
    let form = {"user": {"email": email, "password": password}};
    /*axios.post("http://localhost:5000/api/user/login", form)
      .then(response => {
        console.log(response);
        //AsyncStorage.setItem('user', response.data.user);
        navigation.replace("SplashScreen");
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      })*/
    AsyncStorage.setItem("user", "asdf@asdf.asdf");
    navigation.replace("Content");
  }

  return(
    <ScrollView contentContainerStyle={styles.container}> 
    {/* ScrollView를 통해 키보드가 올라와도 컴포넌트간 간격이 변하지 않는다. */}

      <Text style={styles.title}>Login</Text>

      <View style={styles.items}>
        <Text>Email</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setEmail}
          text={email}
          keyboardType={'email-address'}
          autoComplete={'email'}
          textContentType={'emailAddress'}
          returnKeyType={'next'}
        />
        <Text>Password</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setPassword}
          text={password}
          secureTextEntry={true}
          autoCompleteType={'password'}
          textContentType={'password'}
          returnKeyType={'done'}
        />
      </View>

      <View>
        <Text style={styles.text}>
          Don't you have an account?
          <Text style={{color: '#2196F3'}} onPress={()=> navigation.navigate("Register")}> Register here.</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{color: 'white'}}>Log in</Text>
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
    height: 200,
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
  },
  text : {
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 15,
  }
});