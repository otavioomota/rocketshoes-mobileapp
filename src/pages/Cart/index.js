import React from "react";
import { useSelector, useDispatch } from "react-redux";

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

const Cart = () => {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.amount * product.price;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    }))
  );

  const dispatch = useDispatch();

  const decrement = product => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  };

  const increment = product => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  };

  const handlerDelete = id => {
    dispatch(CartActions.deleteFromCart(id));
  };

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
          onPress={() => decrement(product)}
        />
        <Icon2
          name="plus-circle"
          size={20}
          color="#7159c1"
          onPress={() => increment(product)}
        />

        <Icon
          name="delete"
          size={20}
          color="#7159c1"
          onPress={() => handlerDelete(product.id)}
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
    <Container>{products.length > 0 ? productContainer : emptyCart}</Container>
  );
};

export default Cart;
