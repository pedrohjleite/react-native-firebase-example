import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import { RectButton } from 'react-native-gesture-handler';

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
            <RectButton
              onPress={() =>
                navigation.navigate('Store', {
                  screen: 'Favourites',
                })}
            >
              <ItemText>Favoritos</ItemText>
            </RectButton>
          </Item>
          <Item>
            <RectButton
              onPress={() =>
                navigation.navigate('Feed', {
                  screen: 'Notifications',
                })}
            >
              <ItemText>Notificações</ItemText>
            </RectButton>
          </Item>

          <Item>
            <RectButton
              onPress={() =>
                navigation.navigate('Vitrines', {
                  screen: 'AddTreePicture',
                })}
            >
              <ItemText>Minha vitrine</ItemText>
            </RectButton>
          </Item>

          <Item>
            <RectButton
              onPress={() =>
                navigation.navigate('Store', {
                  screen: 'PersonalInfo',
                })}
            >
              <ItemText>Informações pessoais</ItemText>
            </RectButton>
          </Item>

          <Item>
            <RectButton
              onPress={() =>
                navigation.navigate('Store', {
                  screen: 'MyOrders',
                })}
            >
              <ItemText>Pedidos</ItemText>
            </RectButton>
          </Item>
        </ItemsContainer>
      </GhostContainer>
    </Container>
  );
};

export default NavigationDrawer;
