import React from 'react';

import { useAuth } from '../hooks/auth';

import AppStackNavigator from './AppStackNavigator';
import LoginNavigation from './LoginNavigation';

const AppNavigation: React.FC = () => {
  const { isAuth } = useAuth();

  return isAuth ? <AppStackNavigator /> : <LoginNavigation />;
};

export default AppNavigation;
