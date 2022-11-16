import {
  CREATE_FAIL,
  CREATE_SUCCESS,
  CREATE_REQUEST,
  STUDENT_REQUEST,
  STUDENT_SUCCESS,
  STUDENT_FAIL,
  SINGLE_VIEW_REQUEST,
  SINGLE_VIEW_SUCCESS,
  SINGLE_VIEW_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAIL,
  CREATE_STUDENT_COURSE_REQUEST,
  CREATE_STUDENT_COURSE_SUCCESS,
  CREATE_STUDENT_COURSE_FAIL,
  ALL_STUDENT_COURSE_REQUEST,
  ALL_STUDENT_COURSE_SUCCESS,
  ALL_STUDENT_COURSE_FAIL,
  DELETE_STUDENT_COURSE_REQUEST,
  DELETE_STUDENT_COURSE_SUCCESS,
  DELETE_STUDENT_COURSE_FAIL,
} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  studentDetails: [],
  allstudent: [],
  singleview: {},
  deleteStudent:{},
  updateStudent:{},
  studentcourseDetails:[],
  allstudentcourse:[],
  deleteStudentcourse:{}
};
const StudentReducer = (state = initiailState, action) => {
  switch (action.type) {
    // -----cretre student------
    case CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentDetails: action.payload,
        error: "",
      };
    case CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //   ------------all student--------------
    case STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        allstudent: action.payload,
        error: "",
      };
    case STUDENT_FAIL:
      return {
        ...state,
        loading: false,

        error: action.payload,
      };
    //-------single view-----------
    case SINGLE_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        singleview: action.payload,
        error: "",
      };
    case SINGLE_VIEW_FAIL:
      return {
        ...state,
        loading: false,

        error: action.payload,
      };
      //-----delete student---------------

      case DELETE_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          deleteStudent: action.payload,
          error: "",
        };
      case DELETE_STUDENT_FAIL:
        return {
          ...state,
          loading: false,
  
          error: action.payload,
        };
      //-------------update student----------------
      case UPDATE_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          updateStudent: action.payload,
        };
      case UPDATE_STUDENT_FAIL:
        return {
          ...state,
          loading: false,
  
          error: action.payload,
        };
        // -----cretre student course------
    case CREATE_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentcourseDetails: action.payload,
        error: "",
      };
    case CREATE_STUDENT_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
        // -----all student course------
    case ALL_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        allstudentcourse: action.payload,
        error: "",
      };
    case ALL_STUDENT_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
       //-----delete student---------------

       case DELETE_STUDENT_COURSE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_STUDENT_COURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          deleteStudentcourse: action.payload,
          error: "",
        };
      case DELETE_STUDENT_COURSE_FAIL:
        return {
          ...state,
          loading: false,
  
          error: action.payload,
        };



    default:
      return state;
  }
};
export default StudentReducer;
