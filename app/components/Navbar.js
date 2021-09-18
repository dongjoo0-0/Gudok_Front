import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// Bottom bar를 나타낸다. 사실 BottomTapNavigator가 존재하므로 글 / 로그인 로직 처리 이후 HomeScreen을 BottomTapNavigator로 만들려고 한다. 그러려면 이건 사라질 운명..
export default function Navbar() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon size={32} icon="home" />
      <FontAwesomeIcon size={32} icon="user-circle" />
      <FontAwesomeIcon size={32} icon="search" />
    </View>
  );
  /* home user-circle search */
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
});