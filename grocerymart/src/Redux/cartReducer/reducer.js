import * as types from "./actionTypes";

const initialState = {
  cartItems: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART_REQUEST:
      return {
        ...state,
      };
    case types.ADD_TO_CART_SUCCESS:
      return {
        ...state,
      };
    case types.ADD_TO_CART_FAILURE:
      return {
        ...state,
      };
      case types.GET_CART_ITEMS_REQUEST:
      return {
        ...state,
      };
    case types.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: payload,
      };
    case types.GET_CART_ITEMS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { reducer };
