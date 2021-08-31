import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function Topbar() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon size={32} icon="bars"/>
      <Text style={styles.title}>Top bar</Text>
    </View>
  );
  /* bars arrow-left */
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },
  title: {
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
