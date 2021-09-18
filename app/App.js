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

// Import Contexts.

import { AuthProvider } from './contexts/AuthContext';

// Import Fontawesome Libraries to use icons.

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft, faHome, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add( fab, faBars, faArrowLeft, faHome, faUserCircle, faSearch );

// StackNavigator를 만든다.

const Stack = createNativeStackNavigator();

export default App = () => {

  // 로그인 여부에 따라 Auth로 넘어갈지 Home으로 넘어갈지 결정함. AuthProvider를 통해 하위 컴포넌트에서도 auth 정보를 가져올 수 있다.
  const isLoggedIn = true;

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}


