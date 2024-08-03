import {combineReducers,createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

import projectReducer, { addProjectReducers, deleteProjectReducers, detailProjectReducers,loginProjectReducers,signupProjectReducers, updateProjectReducers } from './reducers/projectReducers'



const rootReducer = combineReducers({
  projectLists: projectReducer,
  addProject:addProjectReducers,
  detailPoject:detailProjectReducers,
  updateProject:updateProjectReducers,
  deleteProject:deleteProjectReducers,
  signUpProject:signupProjectReducers,
  loginProject:loginProjectReducers,
})



const middleware=[thunk]


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;