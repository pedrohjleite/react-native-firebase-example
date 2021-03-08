import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  GhostContainer,
  ItemsContainer,
  Item,
  ItemText,
} from './styles';

const NavigationDrawer: React.FC<
  DrawerContentComponentProps<DrawerContentOptions>
> = ({ navigation }) => {
  return (
    <Container>
      <GhostContainer>
        <ItemsContainer>
          <Item>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TabNavigation', {
                  screen: 'ThreeAndFour',
                  params: {
                    screen: 'StackFour',
                  },
                })
              }>
              <ItemText>Stack Four</ItemText>
            </TouchableOpacity>
          </Item>
        </ItemsContainer>
      </GhostContainer>
    </Container>
  );
};

export default NavigationDrawer;
