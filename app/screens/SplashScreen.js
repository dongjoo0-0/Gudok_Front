import React, { useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens.

import HomeScreen from './HomeScreen';
import ArticleScreen from './ArticleScreen';
import LogInScreen from './LogInScreen';
import RegisterScreen from './RegisterScreen';

// Import Header Component.

import Topbar from '../components/Topbar';

// Import Context.

import { AuthContext } from '../contexts/AuthContext';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create Navigator.



// Try to get data from server.
export const isAuthenticated = async () => {
  try {
    /*const response = await axios.get("url");
    return response.data;
    const dummy = {
      user: {
        _id: "",
        email: "adsf@asdf.asdf",
        search_list : ['asdf','asdf'],
        subscribe_list : ['asdf','asdf']
      }
    }*/
    const dummy = await AsyncStorage.getItem("user");
    return {user: {email: dummy}};
  } catch (error) {
    return console.log(error);
  }
}

export default SplashScreen = ({navigation}) => {
  // Get Context from AuthProvider initialized AuthContext.
  const [authState, setAuthState] = useContext(AuthContext);

  // Load user data and store in authState.
  const loadData = () => {
    isAuthenticated()
      .then(data => {
        if(data === null){
          console.log("Error: Not available");
          return;
        }
        if(data.error){
          console.log("Error", data.error);
        }
        else{
          setAuthState(
            {...authState,
                _id: data.user._id,
                email: data.user.email,
                searchList: data.user.searchList,
                subList: data.user.subList,
            }
          )
        }
      })
  };

  const removeItemValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
  }  

  // Load user data when this screen mounts.
  useEffect(()=> {
    loadData();
    console.log("Finished load data");
    removeItemValue("user");
    navigation.replace(authState.email ? 'Content' : 'Auth');
  }, []);

  // if authStata._id is empty string, get to login screen. else, home screen.
  return(
    <></>
  );
};