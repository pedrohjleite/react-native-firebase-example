import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Button, ButtonText, Container, Input, ItemsContainer } from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticateUser } = useAuth();

  return (
    <Container>
      <ItemsContainer>
        <Input
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(value) => setUsername(value)}
        />
        <Input
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
        />
        <Button onPress={() => authenticateUser({ username, password })}>
          <ButtonText>Button</ButtonText>
        </Button>
      </ItemsContainer>
    </Container>
  );
};

export default Login;
