import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';

// Import Contexts.

import { AuthProvider } from './contexts/AuthContext';

// Import Fontawesome Libraries to use icons.

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft, faHome, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add( fab, faBars, faArrowLeft, faHome, faUserCircle, faSearch );

const Stack = createNativeStackNavigator();

const Auth = () => {
  return(
    <Stack.Navigator initialRouteName="LogIn">
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
    </Stack.Navigator>
  );
}

const Content = () => {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={ HomeScreen } 
        options={{ headerLeft: () => <Topbar/>, headerTitleAlign: 'center' }}
      />
      <Stack.Screen 
        name="Article" 
        component={ ArticleScreen }
      />
    </Stack.Navigator>
  );
}

export default App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen 
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Content"
            component={Content}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}


