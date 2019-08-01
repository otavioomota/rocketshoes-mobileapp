import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";

import * as CartActions from "../../store/modules/cart/actions";

import { formatPrice } from "../../util/formatPrice";

import {
  Container,
  ProductsContainer,
  ProductContainer,
  Product,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  Details,
  DetailsAmount,
  DetailsAmountText,
  DetailsPrice,
  Total,
  TotalText,
  TotalPrice,
  SubmitButton,
  SubmitButtonText,
  EmptyCart,
  EmptyText,
} from "./styles";

class Cart extends Component {
  state = {};

  decrement = product => {
    const { updateAmountRequest } = this.props;

    updateAmountRequest(product.id, product.amount - 1);
  };

  increment = product => {
    const { updateAmountRequest } = this.props;

    updateAmountRequest(product.id, product.amount + 1);
  };

  handlerDelete = id => {
    const { deleteFromCart } = this.props;

    deleteFromCart(id);
  };

  render() {
    const { cart, total } = this.props;

    const products = cart.map(product => (
      <ProductContainer>
        <Product>
          <ProductImage source={{ uri: product.image }} />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.priceFormatted}</ProductPrice>
          </ProductDetails>
        </Product>
        <Details>
          <DetailsAmount>
            <DetailsAmountText>{product.amount}</DetailsAmountText>
          </DetailsAmount>
          <Icon2
            name="minus-circle"
            size={20}
            color="#7159c1"
            onPress={() => this.decrement(product)}
          />
          <Icon2
            name="plus-circle"
            size={20}
            color="#7159c1"
            onPress={() => this.increment(product)}
          />

          <Icon
            name="delete"
            size={20}
            color="#7159c1"
            onPress={() => this.handlerDelete(product.id)}
          />
          <DetailsPrice>{product.subtotal}</DetailsPrice>
        </Details>
      </ProductContainer>
    ));

    const productContainer = (
      <ProductsContainer>
        {products}
        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>{total}</TotalPrice>
        </Total>
        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </ProductsContainer>
    );

    const emptyCart = (
      <EmptyCart>
        <Icon name="remove-shopping-cart" size={50} color="#7159c1" />
        <EmptyText>Carrinho vazio !</EmptyText>
      </EmptyCart>
    );
    return (
      <Container>
        {products.length > 0 ? productContainer : emptyCart}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    })),
    total: formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.amount * product.price;
      }, 0)
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(CartActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
