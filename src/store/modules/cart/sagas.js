import { call, put, all, takeLatest, select } from "redux-saga/effects";
import {
  addToCartSuccess,
  updateAmountSuccess,
  deleteFromCartSuccess,
} from "./actions";
import {formatPrice } from '../../../util/formatPrice';

import api from "../../../services/api";

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stoke = yield call(api.get, `/stock/${id}`);
  const stokeAmount = stoke.data.amount;

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stokeAmount) {
    console.tron.log("SEM ESTOQUE");
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    console.tron.log(id);
    const response = yield call(api.get, `/products/${id}`);

    const newProduct = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    };
    console.tron.log(newProduct);
    yield put(addToCartSuccess(response.data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stoke = yield call(api.get, `/stock/${id}`);
  const stokeAmount = stoke.data.amount;

  if (amount > stokeAmount) {
    console.tron.log("SEM ESTOQUE");
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}

function* deleteProduct({ id }) {
  yield put(deleteFromCartSuccess(id));
}

export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount),
  takeLatest("@cart/DELETE_REQUEST", deleteProduct),
]);
