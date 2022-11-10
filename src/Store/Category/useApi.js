import { axiosApi } from "../api_methods";
import { allcoursecategoryFail, allcoursecategoryRequest, allcoursecategorySuccess, createcoursecategoryFail, createcoursecategoryRequest, createcoursecategorySuccess, deletecategoryFail, deletecategoryRequest, deletecategorySuccess, singlecategoryFail, singlecategoryRequest, singlecategorySuccess, singlecoursecategoryFail, singlecoursecategoryRequest, singlecoursecategorySuccess, updatecategoryFail, updatecategoryRequest, updatecategorySuccess } from "./action";
import { UPDATE_COURSE_CATEGORY_FAIL, UPDATE_COURSE_CATEGORY_REQUEST, UPDATE_COURSE_CATEGORY_SUCCESS } from "./actionType";

// ----------create coursw category---------


export const createcourseCategoryApi = (input,navigate) => {
    return async (dispatch) => {
      dispatch(createcoursecategoryRequest(input));
      try {
        const res = await axiosApi.post(`/course/course_category/`,input);
        
        dispatch(createcoursecategorySuccess(res));
        console.log(input);
        navigate("/categorycourse")
        
      } catch (error) {
        console.log(error);
        dispatch(createcoursecategoryFail(error));
      }
    };
  };



//   -------all courese categoruuyyyyyyyy----------


export const allcoursecategoryApi = (page) => {

   
  return async (dispatch) => {
    dispatch(allcoursecategoryRequest());
    try {
      const res = await axiosApi.get(`/course/course_category/?page=${page?page:1 }`);
      if (res) {
        dispatch(allcoursecategorySuccess(res.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(allcoursecategoryFail(error));
    }
  };
};


// ---------delete course category------

export const deleteCategoryApi = (id) => {
    return async (dispatch) => {
      dispatch(deletecategoryRequest(id));
      try {
        const res = await axiosApi.delete(`/course/course_category/${id}`);
        // console.log(user);
        dispatch(deletecategorySuccess(res.data));
        try {
            const res = await axiosApi.get(`/course/course_category/`);
            if (res) {
              dispatch(allcoursecategorySuccess(res.data));
            }
          } catch (error) {
            console.log(error);
            dispatch(allcoursecategoryFail(error));
          }
      } catch (error) {
        console.log(error);
        dispatch(deletecategoryFail(error?.response?.data));
      }
    };
  };


  //------update course category----------

 
export const updatecategoryApi = (catId,store,navigate) => {
    return async (dispatch) => {
    
      dispatch(updatecategoryRequest(catId));
      try {
        const res = await axiosApi.put(`/course/course_category/${catId}/`, store);
        console.log(res);
        if(res){
            navigate("/categorycourse")
        dispatch(updatecategorySuccess(res.data));
        }
      } catch (error) {
        dispatch(updatecategoryFail(error.res?.data));
      }
    };
  };
  //------single course category----------

 
export const singlecategoryApi = (id) => {
    return async (dispatch) => {
      dispatch(singlecategoryRequest());
      try {
        const res = await axiosApi.get(`/course/course_category/${id}`);
    if(res){

        dispatch(singlecategorySuccess(res.data));
    console.log(res.data);
    }
       
      } catch (error) {
        dispatch(singlecategoryFail(error.res?.data));
      }
    };
  };



  