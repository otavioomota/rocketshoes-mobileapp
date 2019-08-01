import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get("/products");

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = item => {
    const { amount } = this.props;

    return (
      <ProductContainer>
        <Image
          source={{
            uri: item.image,
          }}
        />
        <Title>{item.title}</Title>
        <Price>{item.priceFormatted}</Price>
        <ButtonContainer onPress={() => this.handleAddProduct(item.id)}>
          <ItemCount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ItemCountText>{amount[item.id] || 0}</ItemCountText>
          </ItemCount>

          <ButtonText> ADICIONAR </ButtonText>
        </ButtonContainer>
      </ProductContainer>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          data={products}
          horizontal
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => this.renderProduct(item)}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    amount: state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {}),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(CartActions, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
