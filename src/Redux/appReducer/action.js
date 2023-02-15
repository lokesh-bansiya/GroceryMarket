import * as types from "./actionTypes";
import axios from "axios";

const getProductsByBrandsAmul = () => (dispatch) => {
  dispatch({ type: types.GET_ITEMS_REQUEST });
  return axios
    .get(`https://dull-erin-frock.cyclic.app/products?brand=Amul`, {
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
  return axios
    .get(`https://dull-erin-frock.cyclic.app/products?category=beauty`, {
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
  return axios
    .get(`https://dull-erin-frock.cyclic.app/products?category=bakery`, {
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
    .get(`https://dull-erin-frock.cyclic.app/products?category=vegetable`, {
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
  if (category === "price_low=0&&price_high=300") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_low=300") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_high=1000") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_low=300&&price_high=400") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_low=400&&price_high=500") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_low=500&&price_high=600") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_low=600&&price_high=700") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_low=700&&price_high=800") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_low=800&&price_high=900") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
  else if (category === "price_low=900&&price_high=1000") {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(`https://dull-erin-frock.cyclic.app/products?${category}`)
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
      .get(`https://dull-erin-frock.cyclic.app/products?sortBy=${category}`)
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
  else if (category === "Fresho" ||
    category === "Ocean Secret" ||
    category === "ABHI EGGS" ||
    category === "Milky Mist" ||
    category === "Amul" ||
    category === "Medimix" ||
    category === "Ponds" ||
    category === "Loreal Paris" ||
    category === "Sunsilk" ||
    category === "Dettol" ||
    category === "Colgate" ||
    category === "Cinthol" ||
    category === "Sensodyne" ||
    category === "Mysore Sandal" ||
    category === "STAYFREE" ||
    category === "Nivea" ||
    category === "Nestle" ||
    category === "Mother Dairy" ||
    category === "Hamam" ||
    category === "Pears" ||
    category === "Prasuma" ||
    category === "Oral-B" ||
    category === "Vaseline" ||
    category === "Margo" ||
    category === "Nandini" ||
    category === "Britannia" ||
    category === "Gillette" ||
    category === "iD Fresho"
  ) {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(
        `https://dull-erin-frock.cyclic.app/products/?brand=${category}`)
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
      .get(
        `https://dull-erin-frock.cyclic.app/products/?category=${category}`)
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
  else if (!category) {
    dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
    return axios
      .get(
        `https://dull-erin-frock.cyclic.app/products`)
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
      .get(`https://dull-erin-frock.cyclic.app/products`)
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
    .get(`https://dull-erin-frock.cyclic.app/products/getById/${id}`, {
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

const updateProduct = (id, payload) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PRODUCT_REQUEST });
  return axios
    .patch(
      `https://dull-erin-frock.cyclic.app/products/update/${id}`,
      payload,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      dispatch({
        type: types.UPDATE_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.UPDATE_PRODUCT_FAILURE, payload: e });
      console.log(e);
    });
};


const addOrderedItems = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_ORDERED_ITEMS_REQUEST });
  return axios
    .post(`https://dull-erin-frock.cyclic.app/order/addOrderItem`, payload,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      dispatch({
        type: types.ADD_ORDERED_ITEMS_SUCCESS,
        payload: res.data,
      });
      console.log(payload);
      localStorage.setItem("msg", res.data.Message);
    })
    .catch((e) => {
      dispatch({ type: types.ADD_ORDERED_ITEMS_FAILURE, payload: e });
      console.log(e);
    });
};


const getAllOrderedItems = () => async (dispatch) => {
  dispatch({ type: types.GET_ORDERED_ITEMS_REQUEST });
  return axios
    .get(`https://dull-erin-frock.cyclic.app/order/`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      dispatch({
        type: types.GET_ORDERED_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.GET_ORDERED_ITEMS_FAILURE, payload: e });
      console.log(e);
    });
};


const deleteOrderedItems = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_ORDERED_ITEMS_REQUEST });
  return axios
    .delete(`https://dull-erin-frock.cyclic.app/order/delete/${id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      dispatch({
        type: types.DELETE_ORDERED_ITEMS_SUCCESS,
        payload: res.data,
      });
      console.log(res.data.Message);
      localStorage.setItem("msg", res.data.Message);
    })
    .catch((e) => {
      dispatch({ type: types.DELETE_ORDERED_ITEMS_FAILURE, payload: e });
      console.log(e);
    });
};


export {
  getProductsByBrandsAmul,
  getProductsByCategoryBeauty,
  getProductsByCategoryBakery,
  getProductsByCategoryVegetable,
  addOrderedItems,
  deleteOrderedItems,
  getAllOrderedItems,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
