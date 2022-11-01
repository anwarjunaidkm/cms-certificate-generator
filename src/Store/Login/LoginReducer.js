import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import { LOGOUT_SUCCESS, LOGOUT_REQUEST, LOGOUT_FAIL } from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
  logoutDetails: ["clear"],
      

};

const LoginReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;

export const LogoutReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        logoutDetails: action.payload,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
        
    default:
      return state;
  }
};





