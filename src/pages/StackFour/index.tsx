import React from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../assets/firebase.png';

import { Title, Container, Image, Button, ButtonText } from './styles';

const StackOne: React.FC = () => {
  const { navigate, reset } = useNavigation();

  return (
    <Container>
      <Image source={firebase} />
      <Title>STACK FOUR</Title>
      <Button
        onPress={() => {
          reset({
            routes: [{ name: 'StackThree' }],
            index: 0,
          });
        }}
      >
        <ButtonText>GO BACK TO STACK THREE</ButtonText>
      </Button>
    </Container>
  );
};

export default StackOne;
