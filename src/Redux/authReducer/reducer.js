import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "./actionTypes";

const initialState = {
  userInfo: [],
  userProfile: [],
  signupmessage: "",
  logoutmessage: "",
  isAuth: localStorage.getItem("isAuth") || false,
  accountCreated: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        accountCreated: true,
        signupmessage: payload,
        isLoading: false,
        isError: false,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        accountCreated: false,
        isLoading: false,
        signupmessage: { Message: "Somehting went wrong!" },
        isError: true,
      };

    case SIGNIN_REQUEST:
      return {
        ...state,
      };

    case SIGNIN_SUCCESS:
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userInfo: payload,
        isError: false,
      };
      

    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SIGNOUT:
      
      return {
        ...state,
        userInfo: [],
        userProfile: [],
        isAuth: false,
        isLoading: false,
        isError: false,
        accountCreated: false,
        logoutmessage: { Message: "User Loged Out!" },
      };
    case GET_PROFILE_REQUEST:
      return {
        ...state,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: payload,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
