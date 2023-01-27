import * as types from "./actionTypes";
import axios from "axios";

const getProductsByBrandsAmul = () => (dispatch) => {
  dispatch({ type: types.GET_ITEMS_REQUEST });
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
      dispatch({
        type: types.GET_BY_CATEGORY_BEAUTY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.GET_BY_CATEGORY_BEAUTY_FAILURE, payload: e });
      console.log(e);
    });
};

const getProductsByCategoryBakery = () => (dispatch) => {
  dispatch({ type: types.GET_BY_CATEGORY_BAKERY_REQUEST });
  console.log("running");
  return axios
    .get(`https://zany-bee-sarong.cyclic.app/products?category=bakery`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_BY_CATEGORY_BAKERY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.GET_BY_CATEGORY_BAKERY_FAILURE, payload: e });
      console.log(e);
    });
};

const getProductsByCategoryVegetable = () => (dispatch) => {
  dispatch({ type: types.GET_BY_CATEGORY_VEGETABLES_REQUEST });
  return axios
    .get(`https://zany-bee-sarong.cyclic.app/products?category=vegetable`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_BY_CATEGORY_VEGETABLES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.GET_BY_CATEGORY_VEGETABLES_FAILURE, payload: e });
      console.log(e);
    });
};



const getAllProducts = (category) => async (dispatch) => {
  if (category === "price_low=300&&price_high=700") {

    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://zany-bee-sarong.cyclic.app/products?${category}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({
          type: types.GET_ALL_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => {
        dispatch({ type: types.GET_ALL_PRODUCTS_FAILURE, payload: e });
        console.log(e);
      });

  }
  else if (category === "asc" || category === "desc") {

    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://zany-bee-sarong.cyclic.app/products?sortBy=${category}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({
          type: types.GET_ALL_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => {
        dispatch({ type: types.GET_ALL_PRODUCTS_FAILURE, payload: e });
        console.log(e);
      });

  }
  else if (category) {

    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://zany-bee-sarong.cyclic.app/products/?category=${category}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({
          type: types.GET_ALL_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => {
        dispatch({ type: types.GET_ALL_PRODUCTS_FAILURE, payload: e });
        console.log(e);
      });
    
  }
  else {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://zany-bee-sarong.cyclic.app/products`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({
          type: types.GET_ALL_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => {
        dispatch({ type: types.GET_ALL_PRODUCTS_FAILURE, payload: e });
        console.log(e);
      });
  }
};



const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST });
    return axios
      .get(`https://zany-bee-sarong.cyclic.app/products/getById/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({
          type: types.GET_SINGLE_PRODUCT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => {
        dispatch({ type: types.GET_SINGLE_PRODUCT_FAILURE, payload: e });
        console.log(e);
      });
};

export {
  getProductsByBrandsAmul,
  getProductsByCategoryBeauty,
  getProductsByCategoryBakery,
  getProductsByCategoryVegetable,
  getAllProducts,
  getSingleProduct,
};
