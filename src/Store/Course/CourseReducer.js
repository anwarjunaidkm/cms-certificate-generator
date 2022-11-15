import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, SINGLE_COURSE_FAIL, SINGLE_COURSE_REQUEST, SINGLE_COURSE_SUCCESS, UPDATE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS } from "./actionType";

const initiailState = {
    loading: false,
    error: "",
   courseDetails:{},
   allcourse:[],
   deletecourse:{},
   singlecourse:{},
   updatecourse:{}
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
      // -----delete COURSE------
      case DELETE_COURSE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_COURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          deletecourse: action.payload,
          error: "",
        };
      case DELETE_COURSE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
         //------single  course category----------

    case SINGLE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        singlecourse: action.payload,
        error: "",
      };
    case SINGLE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      
      };
        //------update  course----------

    case UPDATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        updatecourse: action.payload,
        error: "",
      };
    case UPDATE_COURSE_FAIL:
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
