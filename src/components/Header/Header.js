import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { connect } from "react-redux";

import { Container, Logo, Basket, ItemCount } from "./styles";

import logo from "../../assets/logo.png";

const Header = ({ navigation, itemCount }) => {
  return (
    <Container>
      <Logo source={logo} />
      <Basket onPress={() => navigation.navigate("Cart")}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount onPress={() => navigation.navigate("Cart")}>
          {itemCount || 0}
        </ItemCount>
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
