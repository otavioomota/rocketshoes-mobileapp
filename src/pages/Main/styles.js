import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { darken } from "polished";

export const Container = styled.View`
  background-color: #141419;
`;

export const ProductContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 15px;
  width: 220px;
`;
export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;
export const Title = styled.Text`
  font-size: 16px;
`;
export const Price = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;
export const ItemCount = styled.View`
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
  background: ${darken(0.03, "#7159C1")};
`;

export const ItemCountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
