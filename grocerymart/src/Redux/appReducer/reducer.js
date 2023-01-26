import * as types from "./actionTypes";

const initialState = {
  items: [],
  itemsByCategoryBeauty: [],
  itemsByCategoryVegetable: [],
  itemsByCategoryBakery: [],
  allProducts: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_BY_CATEGORY_BEAUTY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_BY_CATEGORY_BEAUTY_SUCCESS:
      return {
        ...state,
        itemsByCategoryBeauty: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_BY_CATEGORY_BEAUTY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_BY_CATEGORY_VEGETABLES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_BY_CATEGORY_VEGETABLES_SUCCESS:
      return {
        ...state,
        itemsByCategoryVegetable: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_BY_CATEGORY_VEGETABLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_BY_CATEGORY_BAKERY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_BY_CATEGORY_BAKERY_SUCCESS:
      return {
        ...state,
        itemsByCategoryBakery: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_BY_CATEGORY_BAKERY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
