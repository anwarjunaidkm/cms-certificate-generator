import { allcourseFail, allcourseRequest, allcourseSuccess, createcourseFail, createcourseRequest, createcourseSuccess } from "./action";
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
