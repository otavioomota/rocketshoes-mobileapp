import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { connect } from "react-redux";

import { Container, Logo, Basket, ItemCount, ButtonHome } from "./styles";

import logo from "../../assets/logo.png";

const Header = ({ navigation, itemCount }) => {
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

const mapStateToProps = state => {
  return {
    itemCount: state.cart.length,
  };
};
export default connect(mapStateToProps)(Header);
