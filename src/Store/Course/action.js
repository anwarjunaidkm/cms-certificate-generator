import { UPDATE_COURSE_CATEGORY_SUCCESS } from "../Category/actionType";
import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, SINGLE_COURSE_REQUEST, SINGLE_COURSE_SUCCESS,SINGLE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_FAIL } from "./actionType";

//------------------------create course--------------------
export const createcourseRequest = () => ({
    type: CREATE_COURSE_REQUEST,
    payload: "",
  });
  
  export const createcourseSuccess = () => ({
    type: CREATE_COURSE_SUCCESS,
    payload: "",
  });
  export const createcourseFail = (error) => ({
    type: CREATE_COURSE_FAIL,
    payload: error,
  });

//   ----------all courese list-----------

export const allcourseRequest = () => ({
    type: ALL_COURSE_REQUEST,
    payload: "",
  });
  
  export const allcourseSuccess = (allcourse) => ({
    type: ALL_COURSE_SUCCESS,
    payload: allcourse,
  });
  export const allcourseFail = (error) => ({
    type: ALL_COURSE_FAIL,
    payload: error,
  });
//   ----------DELETEEE courese list-----------

export const deletecourseRequest = () => ({
    type: DELETE_COURSE_REQUEST,
    payload: "",
  });
  
  export const deletecourseSuccess = (id) => ({
    type: DELETE_COURSE_SUCCESS,
    payload: id,
  });
  export const deletecourseFail = (error) => ({
    type: DELETE_COURSE_FAIL,
    payload: error,
  });
//   ----------single courese list-----------

export const singlecourseRequest = () => ({
    type: SINGLE_COURSE_REQUEST,
    payload: "",
  });
  
  export const singlecourseSuccess = (id) => ({
    type: SINGLE_COURSE_SUCCESS,
    payload: id,
  });
  export const singlecourseFail = (error) => ({
    type: SINGLE_COURSE_FAIL,
    payload: error,
  });



  //------update course --------

export const updatecourseRequest = () => ({
    type: UPDATE_COURSE_REQUEST,
    payload: "",
  });
  
  export const updatecourseSuccess = (catId,updatecourse) => ({
    type: UPDATE_COURSE_CATEGORY_SUCCESS,
    payload:updatecourse,
  });
  export const updatecourseFail = (error) => ({
    type: UPDATE_COURSE_FAIL,
    payload: error,
  });



