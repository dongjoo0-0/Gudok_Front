import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

// convert object id number to string to identify objects.
const convertIdToString = (object) => {
  object["id"] = object.id.toString();
  return object;
}

export default ArticleBoard = ({ navigation }) => {
  const [posts, setPosts] = useState();

  // we need clean-up function... maybe?
  useEffect(() => {
    axios
      .get("http://172.30.1.47:5000/api/post?limit=10")
      .then(response => {
        setPosts(response.data.posts.map(item => convertIdToString(item)));
        console.log("Finished loading posts");
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  }, []);

  // item render function
  const renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={()=> navigation.navigate('Article', { uri: item.url })} style={styles.item}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

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