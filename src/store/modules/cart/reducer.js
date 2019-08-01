import procede from "immer";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "@cart/ADD_SUCCESS":
      return procede(state, draft => {
        draft.push(action.product);
      });

    case "@cart/UPDATE_AMOUNT_SUCCESS":
      return procede(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });

    case "@cart/DELETE_SUCCESS":
      return procede(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        draft.splice(productIndex, 1);
      });
    default:
      return state;
  }
};

export default reducer;
