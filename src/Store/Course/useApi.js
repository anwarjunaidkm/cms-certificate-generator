import { allcourseFail, allcourseRequest, allcourseSuccess, createcourseFail, createcourseRequest, createcourseSuccess, deletecourseFail, deletecourseRequest, deletecourseSuccess, singlecourseFail, singlecourseRequest, singlecourseSuccess, updatecourseFail, updatecourseRequest, updatecourseSuccess } from "./action";
import { axiosApi } from "../api_methods";

export const createcourseApi = (input, navigate) => {
    return async (dispatch) => {
      dispatch(createcourseRequest(input));
      try {
        const res = await axiosApi.post(`/course/course/`, input);
        
        dispatch(createcourseSuccess(res));
        navigate("/allcourses");
      } catch (error) {
        console.log(error);
        dispatch(createcourseFail(error));
      }
    };
  };


  // ---------------all course----------
  export const allcourseApi = () => {

    
  return async (dispatch) => {
    dispatch(allcourseRequest());
    try {
      const res = await axiosApi.get(`/course/course/`);
      if (res) {
        dispatch(allcourseSuccess(res.data));
        
      }
    } catch (error) {
      console.log(error);
      dispatch(allcourseFail(error));
    }
  };
};

// ---------delete course-------------------


export const deletecourseApi = (id) => {
  return async (dispatch) => {
    dispatch(deletecourseRequest(id));
    try {
      const res = await axiosApi.delete(`/course/course/${id}`);
      if (res) {
          dispatch(deletecourseSuccess(res.data));


          try {
            const res = await axiosApi.get(`/course/course/`);
            if (res) {
              dispatch(allcourseSuccess(res.data));
              
            }
          } catch (error) {
            console.log(error);
            dispatch(allcourseFail(error));
          }

      }
    } catch (error) {
      console.log(error);
      dispatch(deletecourseFail(error.response?.data));
    }
  };
};


 //------single course ----------

 
 export const singlecourseApi = (id) => {
  return async (dispatch) => {
    dispatch(singlecourseRequest());
    try {
      const res = await axiosApi.get(`/course/course/${id}`);
  if(res){

      dispatch(singlecourseSuccess(res.data));
  console.log(res.data);
  }
     
    } catch (error) {
      dispatch(singlecourseFail(error.res?.data));
    }
  };
};

 //------update course ----------

 
 export const updatecourseApi = (catId,store,navigate) => {
  return async (dispatch) => {
  
    dispatch(updatecourseRequest(catId));
    try {
      const res = await axiosApi.put(`/course/course/${catId}/`, store);
      console.log(res);
      if(res){
          navigate("/allcourses")
      dispatch(updatecourseSuccess(res.data));
      }
    } catch (error) {
      dispatch(updatecourseFail(error.res?.data));
    }
  };
};