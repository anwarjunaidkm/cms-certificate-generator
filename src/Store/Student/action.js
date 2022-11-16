import { CREATE_COURSE_SUCCESS } from "../Course/actionType";
import {
  CREATE_FAIL,
  CREATE_SUCCESS,
  CREATE_REQUEST,
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
import { STUDENT_REQUEST, STUDENT_SUCCESS, STUDENT_FAIL } from "./actionType";

//------------------------create--------------------
export const createRequest = (input) => ({
  type: CREATE_REQUEST,
  payload: input,
});

export const createSuccess = (studentDetails) => ({
  type: CREATE_SUCCESS,
  payload: studentDetails.data,
});
export const createFail = (error) => ({
  type: CREATE_FAIL,
  payload: error,
});

//   ------------------all student---------------

export const studentRequest = () => ({
  type: STUDENT_REQUEST,
  payload: "",
});

export const studentSuccess = (studentDetails) => ({
  type: STUDENT_SUCCESS,
  payload: studentDetails,
});
export const studentFail = (error) => ({
  type: STUDENT_FAIL,
  payload: error,
});

//   ---------------------single view---------------------
export const singleviewRequest = () => ({
  type: SINGLE_VIEW_REQUEST,
  payload: "",
});
export const singleviewSuccess = (singleview) => ({
  type: SINGLE_VIEW_SUCCESS,
  payload: singleview,
});
export const singleviewFail = (error) => ({
  type: SINGLE_VIEW_FAIL,
  payload: error,
});


// --------delete student-----------------

export const deletestudentRequest = () => ({
    type: DELETE_STUDENT_REQUEST,
    payload: "",
  });
  export const deletestdentSuccess = (id) => ({
    type: DELETE_STUDENT_SUCCESS,
    payload: id,
  });
  export const deletestudentFail = (error) => ({
    type: DELETE_STUDENT_FAIL,
    payload: error,
  });



  // --------------update student---------------



  export const updatestudentRequest = (catId) => ({
    type: UPDATE_STUDENT_REQUEST,
    payload: catId,
  });
  export const updatestdentSuccess = (catId,updateStudent) => ({
    type: UPDATE_STUDENT_SUCCESS,
    payload:catId, updateStudent,
  });
  export const updatestudentFail = (error) => ({
    type: UPDATE_STUDENT_FAIL,
    payload: error,
  });


  //-----create student course--------

  export const createstudentcourseRequest = (input) => ({
    type: CREATE_STUDENT_COURSE_REQUEST,
    payload: input,
  });
  
  export const createstudentcourseSuccess = (studentcourseDetails) => ({
    type: CREATE_STUDENT_COURSE_SUCCESS,
    payload: studentcourseDetails.data,
  });
  export const createstudentcourseFail = (error) => ({
    type: CREATE_STUDENT_COURSE_FAIL,
    payload: error,
  });

  //   ------------------all student course---------------

export const allstudentcourseRequest = () => ({
  type: ALL_STUDENT_COURSE_REQUEST,
  payload: "",
});

export const allstudentcourseSuccess = (allstudentcourse) => ({
  type: ALL_STUDENT_COURSE_SUCCESS,
  payload: allstudentcourse,
});
export const allstudentcourseFail = (error) => ({
  type: ALL_STUDENT_COURSE_FAIL,
  payload: error,
});

// --------delete student course-----------------

export const deletestudentcourseRequest = () => ({
  type: DELETE_STUDENT_COURSE_REQUEST,
  payload: "",
});
export const deletestdentcourseSuccess = (id) => ({
  type: DELETE_STUDENT_COURSE_SUCCESS,
  payload: id,
});
export const deletestudentcourseFail = (error) => ({
  type: DELETE_STUDENT_COURSE_FAIL,
  payload: error,
});

  



