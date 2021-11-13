import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const [pwdErr, setPwdErr] = useState("");

  useEffect(() => {
    if(password != checkPwd){
      setPwdErr("비밀번호가 일치하지 않습니다.");
    }
    else if (password == checkPwd){
      setPwdErr("");
    }
  }, [checkPwd]);

  const handleSubmit = () => {
    if(!email) {
      alert("이메일을 입력하지 않았습니다.");
      return;
    }
    if(!password) {
      alert("비밀번호를 입력하지 않았습니다.");
      return;
    }
    if(password != checkPwd){
      alert("비밀번호가 일치하지 않습니다.");
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
    navigation.replace("LogIn");
  }

  return(
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Register</Text>

      <View style={styles.items}>
        <Text>Email</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput 
            style={[styles.input, styles.email]}
            onChangeText={setEmail}
            text={email}
            keyboardType={'email-address'}
            autoComplete={'email'}
            textContentType={'emailAddress'}
            returnKeyType={'next'}
          />
          <TouchableOpacity style={[styles.button, styles.emailBtn]}>
            <Text style={{color: 'white'}}>중복 확인</Text>
          </TouchableOpacity>
        </View>
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
        <Text style={pwdErr != '' ? styles.pwdErrStyle: styles.opacity}>
          {pwdErr}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    paddingBottom: 15,
    height: 300,
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
  email: {
    width: '70%',
    marginRight: 5,
  },
  emailBtn: {
    alignSelf: 'auto'
  },
  pwdErrStyle: {
    color: 'red',
    fontSize: 12,
    opacity: 1,
  },
  opacity: {
    fontSize: 12,
    opacity: 0,
  }
});