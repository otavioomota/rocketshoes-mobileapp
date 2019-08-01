export function addToCartRequest(id) {
  return {
    type: "@cart/ADD_REQUEST",
    id,
  };
}
export function addToCartSuccess(product) {
  return {
    type: "@cart/ADD_SUCCESS",
    product,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    id,
    amount,
  };
}

export function deleteFromCartRequest(id) {
  return {
    type: "@cart/DELETE_REQUEST",
    id,
  };
}
export function deleteFromCartSuccess(id) {
  return {
    type: "@cart/DELETE_SUCCESS",
    id,
  };
}
