import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import getPosts from './getPosts';

export default ArticleBoard = ({ navigation }) => {
  const renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={()=> navigation.navigate('Article')} style={styles.item}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  const posts = getPosts(10, 0, null, null);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={renderItem}
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