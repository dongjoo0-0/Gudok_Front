import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// 부모에서 props를 통해 article data를 받아오고 렌더링 해주면 될듯.
export default ArticleScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text>Hello, Article</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});