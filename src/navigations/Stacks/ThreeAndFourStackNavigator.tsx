import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StackThree from '../../pages/StackThree';
import StackFour from '../../pages/StackFour';

const Stack = createStackNavigator();

const ThreeAndFourStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackThree"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackThree" component={StackThree} />
      <Stack.Screen name="StackFour" component={StackFour} />
    </Stack.Navigator>
  );
};

export default ThreeAndFourStackNavigator;
