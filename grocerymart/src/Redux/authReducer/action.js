import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "./actionTypes";
import axios from "axios";

const getProfile = (userKey) => (dispatch) => {
  if (userKey !== "undefined") {
    dispatch({ type: GET_PROFILE_REQUEST });
    axios
      .get(`https://zany-bee-sarong.cyclic.app/users/profile/${userKey}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: GET_PROFILE_FAILURE });
        console.log(e);
        console.log("cant get profile of user");
      });
  }
  console.log({ Message: "Userkey is undefined!" });
};

const signUp = (admin, payload) => (dispatch) => {
  if (admin === "admin") {
    dispatch({ type: SIGNUP_REQUEST });
    axios
      .post("https://zany-bee-sarong.cyclic.app/users/admin/signup", payload)
      .then((response) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
        console.log(response.data);
        localStorage.setItem("msg", response.data.Message);
      })
      .catch((e) => {
        dispatch({ type: SIGNUP_FAILURE });
        console.log(e);
        console.log({ Message: "Admin Signup failure!" });
      });
  } else {
    dispatch({ type: SIGNUP_REQUEST });
    axios
      .post("https://zany-bee-sarong.cyclic.app/users/user/signup", payload)
      .then((response) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
        console.log(response.data);
        localStorage.setItem("msg", response.data.Message);
      })
      .catch((e) => {
        dispatch({ type: SIGNUP_FAILURE });
        console.log(e);
        console.log({ Message: "User Signup failure!" });
      });
  }
};

const login = (payload) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });
  axios
    .post("https://zany-bee-sarong.cyclic.app/users/login", payload)
    .then((response) => {
      dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      localStorage.setItem("msg", response.data.Message);
      localStorage.setItem("userKey", response.data.userKey);
      if (response.data.adminID) {
        localStorage.setItem("adminID", response.data.adminID);
      }
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    })
    .catch((e) => {
      dispatch({ type: SIGNIN_FAILURE });
      console.log(e);
    });
};

export { signUp, login, getProfile };
