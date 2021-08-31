import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Topbar from './Topbar';
import ArticleBoard from './ArticleBoard';
import Navbar from './Navbar';
//import Sidebar from './Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faArrowLeft, faHome, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add( fab, faBars, faArrowLeft, faHome, faUserCircle, faSearch );

export default function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <Topbar />
      <ArticleBoard />
      <Navbar />
      <StatusBar style="auto" />
    </View>
    /* 
    login board
    register board
    top title bar / article board / bot nav bar / side bar -> main page
    top search bar / search autocomplete board
    top result bar
    reserved word bar
    profile / menu list
    */
  );
}

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
