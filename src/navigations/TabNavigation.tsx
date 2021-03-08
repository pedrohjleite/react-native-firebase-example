import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import OneAndTwoStackNavigator from './Stacks/OneAndTwoStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  const iconColors = {
    active: 'purple',
    inactive: 'white',
    background: '#000000',
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: iconColors.background,
      }}>
      <Tab.Navigator
        initialRouteName="OneAndTwo"
        tabBarOptions={{
          keyboardHidesTabBar: true,
          tabStyle: {
            backgroundColor: iconColors.background,
          },
          labelStyle: { color: iconColors.inactive },
          safeAreaInsets: {
            bottom: 0,
          },
        }}>
        <Tab.Screen
          name="OneAndTwo"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                size={26}
                color={focused ? iconColors.active : iconColors.inactive}
              />
            ),
          }}
          component={OneAndTwoStackNavigator}
        />

        {/* <Tab.Screen
          name="Search"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="search"
                size={26}
                color={focused ? iconColors.active : iconColors.inactive}
              />
            ),
          }}
          component={SearchStackNavigator}
        /> */}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigation;
