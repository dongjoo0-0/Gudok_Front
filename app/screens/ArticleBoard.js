import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function ArticleBoard() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={[
          {key: '글1'},
          {key: '글2'},
          {key: '글3'},
          {key: '글4'},
          {key: '글5'},
        ]}
        renderItem={({item}) => <View style={styles.item}><Text>{item.key}</Text></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  item: {
    height: 200,
    width: '100%',
    backgroundColor: 'lightgray',
    marginTop: 30,
  }

});