import { ALL_COURSE_CATEGORY_REQUEST, ALL_COURSE_CATEGORY_SUCCESS, CREATE_COURSE_CATEGORY_FAIL, CREATE_COURSE_CATEGORY_REQUEST, CREATE_COURSE_CATEGORY_SUCCESS, DELETE_COURSE_CATEGORY_FAIL, DELETE_COURSE_CATEGORY_REQUEST, DELETE_COURSE_CATEGORY_SUCCESS, SINGLE_COURSE_CATEGORY_FAIL, SINGLE_COURSE_CATEGORY_REQUEST, SINGLE_COURSE_CATEGORY_SUCCESS, UPDATE_COURSE_CATEGORY_FAIL, UPDATE_COURSE_CATEGORY_REQUEST, UPDATE_COURSE_CATEGORY_SUCCESS } from "./actionType";



const initiailState = {
    loading: false,
    error: "",
    createcoursecategory:{},
    allcoursecategory:{},
    singlecoursecategory:{},
    deletecategory:{},
    updatecategory:{},
    singlecategory:{},
   
  };


  const CategoryReducer = (state = initiailState, action) => {
    switch (action.type) {
      // -----cretre Course  category------
      case CREATE_COURSE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_COURSE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          createcoursecategory: action.payload,
          error: "",
        };
      case CREATE_COURSE_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };


        // -----all coursec category------
        case ALL_COURSE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_COURSE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          allcoursecategory: action.payload,
          error: "",
        };
      case ALL_COURSE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          error: action.payload,
        
        };

    //------delte course----------

    case DELETE_COURSE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_COURSE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          deletecategory: action.payload,
          error: "",
        };
      case DELETE_COURSE_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        
        };
    //------update  course category----------

    case UPDATE_COURSE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_COURSE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          updatecategory: action.payload,
          error: "",
        };
      case UPDATE_COURSE_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        
        };


    //------single  course category----------

    case SINGLE_COURSE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SINGLE_COURSE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          singlecategory: action.payload,
          error: "",
        };
      case SINGLE_COURSE_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        
        };






        default:
            return state;
        }
      };
      export default CategoryReducer;
      