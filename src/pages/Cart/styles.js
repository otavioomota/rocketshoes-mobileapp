import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  background: #141419;
`;
export const ProductsContainer = styled.View`
  background: #ffffff;
  border-radius: 4px;
  padding: 10px;
  margin: 15px;
`;
export const ProductContainer = styled.View`
  margin-bottom: 15px;
`;
export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;
export const ProductDetails = styled.View`
  flex-direction: column;
  flex: 1;
  margin-left: 5px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
`;
export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;
export const Details = styled.View`
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const DetailsAmount = styled.View`
  background: #ffffff;
  width: 70px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #fafafa;
  margin-left: 10px;
`;
export const DetailsAmountText = styled.Text`
  font-size: 16px;
  margin-left: 5px;
`;
export const DetailsPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Total = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TotalText = styled.Text`
  font-size: 22px;
  color: #999999;
  font-weight: bold;
`;
export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  align-items: center;
  margin: 15px 0 0 5px;
  padding: 15px 0;
  border-radius: 4px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fafafa;
`;

export const EmptyCart = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;

  margin: 30px;
  padding: 30px;
`;

export const EmptyText = styled.Text`
  font-size: 35px;
  color: #9999;
`;
