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
} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  studentDetails: [],
  allstudent: [],
  singleview: {},
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

    default:
      return state;
  }
};
export default StudentReducer;
