import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Topbar from '../components/Topbar';
import ArticleBoard from '../components/ArticleBoard';
import Navbar from '../components/Navbar';
//import Sidebar from '../components/Sidebar';

export default HomeScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <ArticleBoard />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    height: Constants.statusBarHeight,
  }
});