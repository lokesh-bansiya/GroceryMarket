import * as types from "./actionTypes";

const initialState = {
  items: [],
  itemsByCategoryBeauty: [],
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
      
    default:
      return state;
  }
};

export { reducer };
