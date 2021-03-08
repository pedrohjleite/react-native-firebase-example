import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: lightskyblue;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Image = styled.Image`
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  color: #1d1d1d;
  font-size: 48px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
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
