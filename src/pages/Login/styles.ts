import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: lightcyan;
`;

export const ItemsContainer = styled.View`
  height: 30%;
  width: 80%;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  border-color: grey;
  border-width: 1px;
  border-style: solid;
  background-color: white;
`;

export const Button = styled.TouchableOpacity`
  background: purple;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
