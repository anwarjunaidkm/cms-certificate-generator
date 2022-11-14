import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "./actionType";

const initiailState = {
    loading: false,
    error: "",
   courseDetails:{},
   allcourse:[]
  };


  const CourseReducer = (state = initiailState, action) => {
    switch (action.type) {
      // -----CREATE COURSE------
      case CREATE_COURSE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_COURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          courseDetails: action.payload,
          error: "",
        };
      case CREATE_COURSE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      // -----all COURSE------
      case ALL_COURSE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_COURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          allcourse: action.payload,
          error: "",
        };
      case ALL_COURSE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        default:
      return state;
  }
};
export default CourseReducer;
