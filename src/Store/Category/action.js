import { ALL_COURSE_CATEGORY_FAIL, ALL_COURSE_CATEGORY_REQUEST, ALL_COURSE_CATEGORY_SUCCESS, CREATE_COURSE_CATEGORY_FAIL, CREATE_COURSE_CATEGORY_REQUEST, CREATE_COURSE_CATEGORY_SUCCESS, DELETE_COURSE_CATEGORY_FAIL, DELETE_COURSE_CATEGORY_REQUEST, DELETE_COURSE_CATEGORY_SUCCESS, SINGLE_COURSE_CATEGORY_FAIL, SINGLE_COURSE_CATEGORY_REQUEST, SINGLE_COURSE_CATEGORY_SUCCESS, UPDATE_COURSE_CATEGORY_FAIL, UPDATE_COURSE_CATEGORY_REQUEST, UPDATE_COURSE_CATEGORY_SUCCESS } from "./actionType";


// -------cretae course category-------



export const createcoursecategoryRequest = (input) => ({
    type: CREATE_COURSE_CATEGORY_REQUEST,
    payload: input
  });
  
  export const createcoursecategorySuccess = (createcoursecategory) => ({
    type: CREATE_COURSE_CATEGORY_SUCCESS,
    payload: createcoursecategory,
  });
  export const createcoursecategoryFail = (error) => ({
    type: CREATE_COURSE_CATEGORY_FAIL,
    payload: error,
  });

//   ------all courese category----------

export const allcoursecategoryRequest = () => ({
    type: ALL_COURSE_CATEGORY_REQUEST,
    payload: "",
  });
  
  export const allcoursecategorySuccess = (allcoursecategory) => ({
    type: ALL_COURSE_CATEGORY_SUCCESS,
    payload:allcoursecategory,
  });
  export const allcoursecategoryFail = (error) => ({
    type: ALL_COURSE_CATEGORY_FAIL,
    payload: error,
  });

//------delete course category--------

export const deletecategoryRequest = () => ({
    type: DELETE_COURSE_CATEGORY_REQUEST,
    payload: "",
  });
  
  export const deletecategorySuccess = (deletecategory) => ({
    type: DELETE_COURSE_CATEGORY_SUCCESS,
    payload:deletecategory,
  });
  export const deletecategoryFail = (error) => ({
    type: DELETE_COURSE_CATEGORY_FAIL,
    payload: error,
  });
//------update course category--------

export const updatecategoryRequest = (catId) => ({
    type: UPDATE_COURSE_CATEGORY_REQUEST,
    payload: "",
  });
  
  export const updatecategorySuccess = (catId,updatecategory) => ({
    type: UPDATE_COURSE_CATEGORY_SUCCESS,
    payload:updatecategory,
  });
  export const updatecategoryFail = (error) => ({
    type: UPDATE_COURSE_CATEGORY_FAIL,
    payload: error,
  });


  //single view category

export const singlecategoryRequest = () => ({
    type: SINGLE_COURSE_CATEGORY_REQUEST,
    payload: "",
  });
  
  export const singlecategorySuccess = (singlecategory) => ({
    type: SINGLE_COURSE_CATEGORY_SUCCESS,
    payload:singlecategory,
  });
  export const singlecategoryFail = (error) => ({
    type: SINGLE_COURSE_CATEGORY_FAIL,
    payload: error,
  });

 

