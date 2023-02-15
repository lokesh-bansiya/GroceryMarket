import * as types from "./actionTypes";

const initialState = {
  items: [],
  singleProduct: [],
  itemsByCategoryBeauty: [],
  itemsByCategoryVegetable: [],
  itemsByCategoryBakery: [],
  allProducts: [],
  orderedItems: [],
  isLoadingAllProduct: false,
  isLoadingBakery: false,
  isLoadingBeauty: false,
  isLoadingNonVeg: false,
  isLoadingVegetables: false,
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
        isLoadingBeauty: true,
      };
    case types.GET_BY_CATEGORY_BEAUTY_SUCCESS:
      return {
        ...state,
        itemsByCategoryBeauty: payload,
        isLoadingBeauty: false,
      };
    case types.GET_BY_CATEGORY_BEAUTY_FAILURE:
      return {
        ...state,
        isLoadingBeauty: false,
      };
    case types.GET_BY_CATEGORY_VEGETABLES_REQUEST:
      return {
        ...state,
        isLoadingVegetables: true,
      };
    case types.GET_BY_CATEGORY_VEGETABLES_SUCCESS:
      return {
        ...state,
        itemsByCategoryVegetable: payload,
        isLoadingVegetables: false,
      };
    case types.GET_BY_CATEGORY_VEGETABLES_FAILURE:
      return {
        ...state,
        isLoadingVegetables: false,
      };
    case types.GET_BY_CATEGORY_BAKERY_REQUEST:
      return {
        ...state,
        isLoadingBakery: true,
      };
    case types.GET_BY_CATEGORY_BAKERY_SUCCESS:
      return {
        ...state,
        itemsByCategoryBakery: payload,
        isLoadingBakery: false,
      };
    case types.GET_BY_CATEGORY_BAKERY_FAILURE:
      return {
        ...state,
        isLoadingBakery: false,
      };
    case types.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoadingAllProduct: true,
      };
    case types.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: payload,
        isLoadingAllProduct: false,
      };
    case types.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoadingAllProduct: false,
      };
    case types.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
      };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: payload,
      };
    case types.GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
      };
      case types.GET_ORDERED_ITEMS_REQUEST:
      return {
        ...state,
      };
    case types.GET_ORDERED_ITEMS_SUCCESS:
      return {
        ...state,
        orderedItems: payload,
      };
    case types.GET_ORDERED_ITEMS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { reducer };
