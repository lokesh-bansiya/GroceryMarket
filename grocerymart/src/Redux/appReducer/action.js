import * as types from "./actionTypes";
import axios from "axios";

const getProductsByBrandsAmul = () => (dispatch) => {
    dispatch({ type: types.GET_ITEMS_REQUEST });
    console.log("running");
    return axios
      .get(`https://zany-bee-sarong.cyclic.app/products?brand=Amul`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({ type: types.GET_ITEMS_SUCCESS, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: types.GET_ITEMS_FAILURE, payload: e });
        console.log(e);
      });
  };

  const getProductsByCategoryBeauty = () => (dispatch) => {
    dispatch({ type: types.GET_BY_CATEGORY_BEAUTY_REQUEST });
    console.log("running");
    return axios
      .get(`https://zany-bee-sarong.cyclic.app/products?category=beauty`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({ type: types.GET_BY_CATEGORY_BEAUTY_SUCCESS, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: types.GET_BY_CATEGORY_BEAUTY_FAILURE, payload: e });
        console.log(e);
      });
  };


export {getProductsByBrandsAmul, getProductsByCategoryBeauty};
// getProductsByBrandsFresho