import * as types from "./actionTypes";
import axios from "axios";

const addProductToCart = (id, value) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART_REQUEST });
  return axios
    .post(`https://zany-bee-sarong.cyclic.app/cart/addcartItem/${id}`, value, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("msg", res.data.Message);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCartItems = () => (dispatch) => {
  dispatch({ type: types.GET_CART_ITEMS_REQUEST });
  return axios
    .get(`https://zany-bee-sarong.cyclic.app/cart/cartItems`, {
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
    .delete(`https://zany-bee-sarong.cyclic.app/cart/delete/${id}`, {
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
    .patch(`https://zany-bee-sarong.cyclic.app/cart/update/${id}`, payload, {
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
    .get(`https://zany-bee-sarong.cyclic.app/cart/getById/${id}`, {
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
