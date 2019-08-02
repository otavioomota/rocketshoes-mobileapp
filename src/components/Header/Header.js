import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { useSelector } from "react-redux";

import { Container, Logo, Basket, ItemCount, ButtonHome } from "./styles";

import logo from "../../assets/logo.png";

const Header = ({ navigation }) => {
  const itemCount = useSelector(state => state.cart.length);

  return (
    <Container>
      <ButtonHome onPress={() => navigation.navigate("Main")}>
        <Logo source={logo} />
      </ButtonHome>
      <Basket onPress={() => navigation.navigate("Cart")}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{itemCount || 0}</ItemCount>
      </Basket>
    </Container>
  );
};

export default Header;
