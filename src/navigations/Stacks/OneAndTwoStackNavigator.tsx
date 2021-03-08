import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StackOne from '../../pages/StackOne';
import StackTwo from '../../pages/StackTwo';

const Stack = createStackNavigator();

const OneAndTwoStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackOne"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackOne" component={StackOne} />
      <Stack.Screen name="StackTwo" component={StackTwo} />
    </Stack.Navigator>
  );
};

export default OneAndTwoStackNavigator;
