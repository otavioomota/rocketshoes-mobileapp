import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

import * as CartActions from "../../store/modules/cart/actions";

import api from "../../services/api";
import { formatPrice } from "../../util/formatPrice";

import {
  Container,
  ProductContainer,
  Image,
  Title,
  Price,
  ButtonContainer,
  ItemCount,
  ButtonText,
  ItemCountText,
} from "./styles";

const Main = () => {
  const [products, setProduct] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProduct(data);
    }

    loadProducts();
  }, []);

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

  const renderProduct = item => {
    return (
      <ProductContainer>
        <Image
          source={{
            uri: item.image,
          }}
        />
        <Title>{item.title}</Title>
        <Price>{item.priceFormatted}</Price>
        <ButtonContainer onPress={() => handleAddProduct(item.id)}>
          <ItemCount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ItemCountText>{amount[item.id] || 0}</ItemCountText>
          </ItemCount>

          <ButtonText> ADICIONAR </ButtonText>
        </ButtonContainer>
      </ProductContainer>
    );
  };

  return (
    <Container>
      <FlatList
        data={products}
        horizontal
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => renderProduct(item)}
      />
    </Container>
  );
};

export default Main;
