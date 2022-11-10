import { logDOM } from "@testing-library/react";
import { axiosApi } from "../api_methods";
import {
  createFail,
  createRequest,
  createSuccess,
  deletestdentSuccess,
  deletestudentFail,
  deletestudentRequest,
  singleviewFail,
  singleviewRequest,
  singleviewSuccess,
  studentFail,
  studentRequest,
  studentSuccess,
  updatestdentSuccess,
  updatestudentFail,
  updatestudentRequest,
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

export const studentApi = (page) => {

    // console.log(page);
  return async (dispatch) => {
    dispatch(studentRequest());
    try {
      const res = await axiosApi.get(`/student/student/?page=${page?page:1 }`);
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


// ---------delete student-------------------


export const deleteStudentApi = (id,navigate) => {
    return async (dispatch) => {
      dispatch(deletestudentRequest(id));
      try {
        const res = await axiosApi.delete(`/student/student/${id}`);
        if (res) {
            dispatch(deletestdentSuccess(res.data));
            navigate("/allstudents")
          
        }
      } catch (error) {
        console.log(error);
        dispatch(deletestudentFail(error.response?.data));
      }
    };
  };


  // -------update student--------------------


  
// export const updateStudentApi = (catId,store,navigate) => {
//   return async (dispatch) => {
//     dispatch(updatestudentRequest(catId));
//     try {
//       const res = await axiosApi.put(`/student/student/${catId}/`,store);
//       if (res) {
//           dispatch(updatestdentSuccess(res.data));
//           console.log(res);
//           navigate(`/studentview/${catId}`)
          
        
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch(updatestudentFail(error.response?.data));
//     }
//   };
// };


export const updateStudentApi = (catId,store,navigate) => {
  return async (dispatch) => {
    console.log("store ,",store);
    dispatch(updatestudentRequest(catId));
    try {
      const res = await axiosApi.put(`/student/student/${catId}/`, store);
      console.log(res);
      dispatch(updatestdentSuccess(res.data));
      navigate(`/studentview/${catId}`);
    } catch (error) {
      dispatch(updatestudentFail(error.res?.data));
    }
  };
};
