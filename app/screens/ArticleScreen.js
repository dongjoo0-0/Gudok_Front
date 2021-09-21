import React from 'react';
import { WebView } from 'react-native-webview';

// 부모에서 props를 통해 article data를 받아오고 렌더링 해주면 될듯.
export default ArticleScreen = ({ navigation }) => {
  return(
    <WebView 
      source={{ uri: 'https://m.naver.com' }}
    />
  );
};