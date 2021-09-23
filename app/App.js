import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './screens/SplashScreen';

// Import Contexts.

import { AuthProvider } from './contexts/AuthContext';

// Import Fontawesome Libraries to use icons.

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft, faHome, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add( fab, faBars, faArrowLeft, faHome, faUserCircle, faSearch );

export default App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <SplashScreen />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}


