/* eslint-disable no-unused-vars */
import { ADD_PROJECT_FAIL, ADD_PROJECT_REQUEST, ADD_PROJECT_RESET, ADD_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DETAIL_PROJECT_FAIL, DETAIL_PROJECT_REQUEST, DETAIL_PROJECT_SUCCESS, GET_PROJECT_FAIL, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, LOGIN_PROJECT_FAIL, LOGIN_PROJECT_REQUEST, LOGIN_PROJECT_SUCCESS, LOGOUT_PROJECT, SIGNUP_PROJECT_FAIL, SIGNUP_PROJECT_REQUEST, SIGNUP_PROJECT_SUCCESS, UPDATE_PROJECT_FAIL, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS } from "../constants/projectConstants";



export const projectReducers = (state={projects : []}, actions )=>{
    switch (actions.type) {
        case GET_PROJECT_REQUEST:
            return {loading : true,success : false, proejcts : []}
        case GET_PROJECT_SUCCESS:
            return {loading : false, success : true, projects : actions.payload}
        case GET_PROJECT_FAIL:
            return {loading : false, success : false, error : actions.payload}
        default:
            return state;
    }
}

export const addProjectReducers = (state={ }, actions )=>{
    switch (actions.type) {
        case ADD_PROJECT_REQUEST:
            return {loading : true, success : false, project : {}}
        case ADD_PROJECT_SUCCESS:
            return {loading : false, success : true,...state, project : actions.payload}
        case ADD_PROJECT_FAIL:
            return {loading : false, success : false, error : actions.payload}
        case ADD_PROJECT_RESET:
            return { } 
        default:
            return state;
    }
}

export const detailProjectReducers = (state={ project:{}}, actions )=>{
    switch (actions.type) {
        case DETAIL_PROJECT_REQUEST:
            return {loading : true, success : false, project : {}}
        case DETAIL_PROJECT_SUCCESS:
            return {loading : false, success : true, project : actions.payload}
        case DETAIL_PROJECT_FAIL:
            return {loading : false, success : false, error : actions.payload}
        default:
            return state;
    }
}

export const updateProjectReducers = (state={ project:{}}, actions )=>{
    switch (actions.type) {
        case UPDATE_PROJECT_REQUEST:
            return {loading : true, success : false, project : {}}
        case UPDATE_PROJECT_SUCCESS:
            return {loading : false, success : true, project : actions.payload}
        case UPDATE_PROJECT_FAIL:
            return {loading : false, success : false, error : actions.payload}
        default:
            return state;
    }
}



export const deleteProjectReducers = (state={ }, actions )=>{
    switch (actions.type) {
        case DELETE_PROJECT_REQUEST:
            return {loading : true, success : false}
        case DELETE_PROJECT_SUCCESS:
            return {loading : false, success : true}
        case DELETE_PROJECT_FAIL:
            return {loading : false, success : false, error : actions.payload}
        default:
            return state;
    }
}


  
const initialState = {
loading: false,
userInfo: null,
error: null,
};
  
export const signupProjectReducers = (state = initialState, action) => {
switch (action.type) {
    case SIGNUP_PROJECT_REQUEST:
    return {
        ...state,
        loading: true,
    };
    case SIGNUP_PROJECT_SUCCESS:
    return {
        ...state,
        loading: false,
        userInfo: action.payload,
    };
    case SIGNUP_PROJECT_FAIL:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};






  
// export const loginReducer = (state = initialState2, action) => {
// switch (action.type) {
//     case LOGIN_PROJECT_REQUEST:
//     return {
//         ...state,
//         loading: true,
//         error: null
//     };
//     case LOGIN_PROJECT_SUCCESS:
//     return {
//         ...state,
//         loading: false,
//         userData: action.payload,
//         error: null
//     };
//     case LOGIN_PROJECT_FAIL:
//     return {
//         ...state,
//         loading: false,
//         userData: null,
//         error: action.payload
//     };
//     default:
//     return state;
// }
// };

const initialState2 = {
    userInfo:null,
}

export const loginProjectReducers = (state = initialState2, action) => {
    switch (action.type) {
      case LOGIN_PROJECT_REQUEST:
        return { loading: true , isAuthenticated: false};
      case LOGIN_PROJECT_SUCCESS:
        return { loading: false,isAuthenticated: true, userInfo: action.payload };
      case LOGIN_PROJECT_FAIL:
        return { loading: false, isAuthenticated: false, error: action.payload };
      case LOGOUT_PROJECT:
            return {};
      default:
        return state;
    }
  };
  




export default projectReducers