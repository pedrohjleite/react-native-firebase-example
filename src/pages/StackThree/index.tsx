import React from 'react';
import firebase from '../../assets/firebase.png';

import { Title, Container, Image } from './styles';

const StackOne: React.FC = () => {
  return (
    <Container>
      <Image source={firebase} />
      <Title>STACK THREE</Title>
    </Container>
  );
};

export default StackOne;
