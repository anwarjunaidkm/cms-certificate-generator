import { PROFILE_FAIL,PROFILE_REQUEST,PROFILE_SUCCESS} from "./actionType";



const initiailState = {
    loading: false,
    error: "",
    // userDetails: [],
    // logoutDetails: ["clear"],
    profileDetails:[],    
  
  };


export const ProfileReducer = (state = initiailState, action) => {
       switch (action.type) {
         case PROFILE_REQUEST:
           return {
             ...state,
            loading: true,
          };
         case PROFILE_SUCCESS:
           return {
             ...state,
             loading: false,
             profileDetails: action.payload,
          };
        case PROFILE_FAIL:
          return {
           ...state,
             loading: false,
             error: action.payload,
           };
         default:
           return state;
      }
     };