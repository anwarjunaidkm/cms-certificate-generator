import {CREATE_FAIL,CREATE_SUCCESS,CREATE_REQUEST} from './actionType'
import {STUDENT_REQUEST,STUDENT_SUCCESS,STUDENT_FAIL} from './actionType'

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

export const studentRequest = (input) => ({
    type: STUDENT_REQUEST,
    payload:"",
  });
  
  export const studentSuccess = (studentDetails) => ({
    type: STUDENT_SUCCESS,
    payload:studentDetails,
  });
  export const studentFail = (error) => ({
    type:STUDENT_FAIL,
    payload: error,
  });
