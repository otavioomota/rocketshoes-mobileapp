import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #141419;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
export const ButtonHome = styled.TouchableOpacity``;

export const Logo = styled.Image`
  margin-left: 10px;
`;
export const Basket = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 30px;
  height: 24px;
  width: 24px;
`;

export const ItemCount = styled.Text`
  color: #7159c1;
  margin-left: 5px;
  margin-top: -5px;
  font-weight: bold;
`;
