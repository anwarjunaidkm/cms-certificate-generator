import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";
import LogoutReducer from "./Login/LoginReducer";
import { ProfileReducer } from "./Login/ProfileReducer";
import StudentReducer from "./Student/StudentReducer";
import CategoryReducer from "./Category/CategoryReducer";
import CourseReducer from "./Course/CourseReducer";
const rootReducer = combineReducers({
  LoginReducer,
  LogoutReducer,
  ProfileReducer,
  StudentReducer,
  CategoryReducer,
  CourseReducer
  
});

export default rootReducer;
