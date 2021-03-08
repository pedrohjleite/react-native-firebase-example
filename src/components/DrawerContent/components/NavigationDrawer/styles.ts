import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background-color: #000;
  justify-content: space-between;
  padding-top: 15px;
`;

export const GhostContainer = styled.View``;

export const ItemsContainer = styled.View``;

export const Item = styled.View`
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;

  border-bottom-width: 1px;
  border-bottom-color: #1010;

  text-align: center;
`;

export const ItemText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
