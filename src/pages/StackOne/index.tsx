import React from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../assets/firebase.png';

import { Title, Container, Image, ButtonText, Button } from './styles';

const StackOne: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image source={firebase} />
      <Title>STACK ONE</Title>
      <Button onPress={() => navigate('StackTwo')}>
        <ButtonText>NAVIGATE TO STACK TWO</ButtonText>
      </Button>
    </Container>
  );
};

export default StackOne;
