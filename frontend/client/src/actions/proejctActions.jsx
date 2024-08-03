/* eslint-disable no-unused-vars */
import { ADD_PROJECT_FAIL, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DETAIL_PROJECT_FAIL, DETAIL_PROJECT_REQUEST, DETAIL_PROJECT_SUCCESS, GET_PROJECT_FAIL, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, LOGIN_PROJECT_FAIL, LOGIN_PROJECT_REQUEST, LOGIN_PROJECT_SUCCESS, LOGOUT_PROJECT, SIGNUP_PROJECT_FAIL, SIGNUP_PROJECT_REQUEST, SIGNUP_PROJECT_SUCCESS, UPDATE_PROJECT_FAIL, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS } from "../constants/projectConstants"
import axios from 'axios'

export const getListProjects = () => async (dispatch) => {

    try {
        dispatch({ type: GET_PROJECT_REQUEST })
        // Fetching data from API
        const { data } = await axios.get('http://localhost:8000/api')
        dispatch({ type: GET_PROJECT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_PROJECT_FAIL, payload: error.response && error.response.data.message })
    }
}

export const addProject = (projectData) => async (dispatch) => {

    try {
        dispatch({ type: ADD_PROJECT_REQUEST })
        // Fetching data from API
        const { data } = await axios.post('http://localhost:8000/api/', projectData)
        dispatch({ type: ADD_PROJECT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ADD_PROJECT_FAIL, payload: error.response && error.response.data.message })
    }
}

export const detailProject = (id) => async (dispatch) => {

    try {
        dispatch({ type: DETAIL_PROJECT_REQUEST })
        // Fetching data from API
        const { data } = await axios.get(`http://localhost:8000/api/${id}/`)
        dispatch({ type: DETAIL_PROJECT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: DETAIL_PROJECT_FAIL, payload: error.response && error.response.data.message })
    }
}


export const updateProject = (id, projectData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROJECT_REQUEST })

        // Fetching data from API
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }

        const { data } = await axios.put(`http://localhost:8000/api/${id}/`, projectData, config)

        dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: UPDATE_PROJECT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const deleteProject = (id) => async (dispatch) => {

    try {
        dispatch({ type: DELETE_PROJECT_REQUEST })
        // Fetching data from API
        const { data } = await axios.delete(`http://localhost:8000/api/${id}/`)
        dispatch({ type: DELETE_PROJECT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: DELETE_PROJECT_FAIL, payload: error.response && error.response.data.message })
    }
}

export const signup = (name, email, password, password2) => async (dispatch) => {
    try {
        dispatch({ type: SIGNUP_PROJECT_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post('http://127.0.0.1:8000/api/accounts/signup/', { name, email, password, password2 }, config);

        dispatch({
            type: SIGNUP_PROJECT_SUCCESS,
            payload: data
        });

        // You may also want to save user info in local storage
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: SIGNUP_PROJECT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// export const loginProject = (credentials) => {
//     return async (dispatch) => {
//         dispatch({ type: LOGIN_PROJECT_REQUEST });

//         try {
//             // Replace this URL with your actual login endpoint
//             const response = await axios.post('http://127.0.0.1:8000/api/token/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(credentials)
//             });

//             if (!response.ok) {
//                 throw new Error('Login failed');
//             }

//             const data = await response.json();
//             dispatch({
//                 type: LOGIN_PROJECT_SUCCESS,
//                 payload: data
//             });
//         } catch (error) {
//             dispatch({
//                 type: LOGIN_PROJECT_FAIL,
//                 payload: error.message
//             });
//         }
//     };
// };

export const loginProject = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_PROJECT_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        { email, password },
        config
      );
  
      dispatch({
        type: LOGIN_PROJECT_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: LOGIN_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logoutProject = () => (dispatch) => {
localStorage.removeItem("userInfo");
dispatch({ type: LOGOUT_PROJECT });
};




