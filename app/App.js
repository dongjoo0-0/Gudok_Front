import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens.

import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';

// Import Components.

import Topbar from './components/Topbar';

// Import Fontawesome Libraries to use icons.

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft, faHome, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add( fab, faBars, faArrowLeft, faHome, faUserCircle, faSearch );

const Stack = createNativeStackNavigator();

export default App = () => {

  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
      { isLoggedIn ? (
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
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


