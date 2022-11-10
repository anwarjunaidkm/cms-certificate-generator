import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";
import LogoutReducer from "./Login/LoginReducer";
import { ProfileReducer } from "./Login/ProfileReducer";
import StudentReducer from "./Student/StudentReducer";
import CategoryReducer from "./Category/CategoryReducer";
const rootReducer = combineReducers({
  LoginReducer,
  LogoutReducer,
  ProfileReducer,
  StudentReducer,
  CategoryReducer,
  
});

export default rootReducer;
