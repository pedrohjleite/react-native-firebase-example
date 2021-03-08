import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigations/AppNavigation';
import { AuthProvider } from './hooks/auth';

declare const global: { HermesInternal: null | {} };

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
