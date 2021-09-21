import React from 'react';
import { WebView } from 'react-native-webview';

export default ArticleScreen = ({ navigation, route }) => {
  return(
    <WebView 
      source={{ uri: route.params.uri }}
    />
  );
};