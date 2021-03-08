import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// pages
import Login from '../pages/Login';

const Stack = createStackNavigator();

const LoginNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
