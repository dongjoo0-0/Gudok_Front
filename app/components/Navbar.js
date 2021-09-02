import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

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