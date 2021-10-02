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

// Create Navigator.

const Stack = createNativeStackNavigator();

// Try to get data from server.
export const isAuthenticated = async () => {
  try {
    /*const response = await axios.get("url");
    return response.data;*/
    const dummy = {
      user: {
        _id: "",
        email: "adsf@asdf.asdf",
        search_list : ['asdf','asdf'],
        subscribe_list : ['asdf','asdf']
      }
    }
    return dummy;
  } catch (error) {
    return console.log(error);
  }
}

export default SplashScreen = () => {
  // Get Context from AuthProvider initialized AuthContext.
  const [authState, setAuthState] = useContext(AuthContext);

  // Load user data and store in authState.
  const loadData = () => {
    isAuthenticated()
      .then(data => {
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

  // Load user data when this screen mounts.
  useEffect(()=> {
    loadData();
    console.log("Finished load data");
  }, []);

  // if authStata._id is empty string, get to login screen. else, home screen.
  return(
    <Stack.Navigator>
    { authState._id ? (
      <>
        <Stack.Screen 
          name="Home" 
          component={ HomeScreen } 
          options={{ headerLeft: () => <Topbar/>, headerTitleAlign: 'center' }}
        />
        <Stack.Screen 
          name="Article" 
          component={ ArticleScreen }
        />
      </>
    ) : (
      <>
        <Stack.Screen 
          name="LogIn" 
          component={ LogInScreen } 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={ RegisterScreen }
          options={{ headerShown: false }}
        />
      </>
    )}
    </Stack.Navigator>
  );
};