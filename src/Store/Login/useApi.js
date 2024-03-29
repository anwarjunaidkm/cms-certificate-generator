import { loginFail, loginRequest, loginSuccess } from "./action";
import { logoutFail, logoutSuccess, logoutRequest } from "./action";
import { profileFail,profileSuccess,profileRequest } from "./action";

import axios from "axios";
import { axiosApi } from "../api_methods";
//   import { token } from "react";
//   import { navigate } from "react-router";
//   import { axiosApi } from "./../AxiosMethod";

export const loginApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest(input));

    try {
      const user = await axiosApi.post(`/account/login/`, input);
      console.log(user);
      if (user?.data?.token) {
        dispatch(loginSuccess(user.data));

        sessionStorage.setItem("token", user.data.token);
        navigate("/dashbord");
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFail(error?.response?.data));
    }
  };
};

// -----------------------logout----------------------

export const logoutApi = (navigate) => {
  return async (dispatch) => {
    dispatch(logoutRequest());

    try {
      const token = sessionStorage.getItem("token");
      const res = await axiosApi.post(`/account/logout/`, token);
      console.log(res);
      if (res) {
        dispatch(logoutSuccess(res.data));

        sessionStorage.clear("token");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      dispatch(logoutFail(error));
    }
  };
};


// --------------profile------------------



export const profileApi = () => {
    return async (dispatch) => {
      dispatch(profileRequest());
  
      try {
       
        const res = await axiosApi.get(`/account/profile/`);
        // console.log(res?.data?.email);
        if (res) {
          dispatch(profileSuccess(res.data));
  
        
          
        }
      } catch (error) {
        console.log(error);
        dispatch(profileFail(error));
      }
    };
  };




