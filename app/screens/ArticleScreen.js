import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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