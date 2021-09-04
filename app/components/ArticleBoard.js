import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default ArticleBoard = ({ navigation }) => {
  const renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={()=> navigation.navigate('Article')} style={styles.item}>
        <Text>{item.key}</Text>
      </TouchableOpacity>
    );
  }

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