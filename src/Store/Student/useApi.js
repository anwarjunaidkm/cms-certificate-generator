import { axiosApi } from "../api_methods";
import {
  createFail,
  createRequest,
  createSuccess,
  singleviewFail,
  singleviewRequest,
  singleviewSuccess,
  studentFail,
  studentRequest,
  studentSuccess,
} from "./action";

// ------------cretee student--------------
export const createApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(createRequest(input));
    try {
      const res = await axiosApi.post(`/student/student/`, input);
      //   if (res) {
      //     dispatch(createSuccess(res.data));
      //     navigate('/allstudents')
      //   }
      dispatch(createSuccess(res));
      navigate("/allstudents");
    } catch (error) {
      console.log(error);
      dispatch(createFail(error));
    }
  };
};

// ---------Allstudents------------------

export const studentApi = () => {
  return async (dispatch) => {
    dispatch(studentRequest());
    try {
      const res = await axiosApi.get(`/student/student/`);
      if (res) {
        dispatch(studentSuccess(res.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(studentFail(error));
    }
  };
};

//   -------------single view----------

export const singleviewApi = (id) => {
  return async (dispatch) => {
    dispatch(singleviewRequest());
    try {
      const res = await axiosApi.get(`/student/student/${id}`);
      if (res) {
        dispatch(singleviewSuccess(res.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(singleviewFail(error));
    }
  };
};
