import * as types from "./actionTypes";
import axios from "axios";

const addProductToCart = (value) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART_REQUEST });
  return axios
    .post(`https://dull-erin-frock.cyclic.app/cart/addcartItem`, value, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({
        type: types.ADD_TO_CART_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("msg", res.data.Message);
    })
    .catch((err) => {
      dispatch({ type: types.ADD_TO_CART_FAILURE, payload: err });
      console.log(err);
    });
};

const getCartItems = () => (dispatch) => {
  dispatch({ type: types.GET_CART_ITEMS_REQUEST });
  return axios
    .get(`https://dull-erin-frock.cyclic.app/cart/cartItems`,{
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.GET_CART_ITEMS_FAILURE, payload: e });
      console.log(e);
    });
};

const deleteCartItem = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_ITEM_REQUEST });
  return axios
    .delete(`https://dull-erin-frock.cyclic.app/cart/delete/${id}`,{
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({
        type: types.DELETE_CART_ITEM_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.DELETE_CART_ITEM_FAILURE, payload: e });
      console.log(e);
    });
};

const updateCartItemQuantity = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_ITEM_REQUEST });
  return axios
    .patch(`https://dull-erin-frock.cyclic.app/cart/update/${id}`, payload,{
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({
        type: types.UPDATE_CART_ITEM_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.UPDATE_CART_ITEM_FAILURE, payload: e });
      console.log(e);
    });
};

const getSingleCartItem = (id) => (dispatch) => {
  dispatch({ type: types.GET_BY_ID_CART_ITEMS_REQUEST });
  return axios
    .get(`https://dull-erin-frock.cyclic.app/cart/getById/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_BY_ID_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.GET_BY_ID_CART_ITEMS_FAILURE, payload: e });
      console.log(e);
    });
};

export {
  addProductToCart,
  getCartItems,
  deleteCartItem,
  updateCartItemQuantity,
  getSingleCartItem,
};
