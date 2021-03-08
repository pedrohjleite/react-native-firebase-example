import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';

import { useNavigationDrawer } from '../hooks/navigationDrawer';

import NavigationDrawer from '../components/DrawerContent/components/NavigationDrawer';

type DrawerNavigatorParamList = {
  TabNavigation: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

const DrawerNavigator: React.FC = () => {
  const { isNavigationDrawerOpen } = useNavigationDrawer();

  const { dispatch } = useNavigation();

  const didMount = useRef(false);

  const [initRender, setInitRender] = useState(true);

  useEffect(() => {
    setInitRender(false);
  }, [initRender]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
    } else {
      dispatch(DrawerActions.openDrawer());
    }
  }, [isNavigationDrawerOpen]);

  return (
    <Drawer.Navigator
      initialRouteName="TabNavigation"
      drawerContent={(props) => <NavigationDrawer {...props} />}
      drawerStyle={initRender && { width: 0 }}
      screenOptions={{
        drawerIcon: () => <Icon name="menu" />,
      }}>
      <Drawer.Screen
        options={{ swipeEnabled: false }}
        name="TabNavigation"
        component={TabNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
