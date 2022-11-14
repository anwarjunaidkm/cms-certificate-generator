import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "./actionType";

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
