import { createStore, combineReducers } from 'redux'
import LoginReducer  from '../reducers/login.js'

const store = createStore(combineReducers({
  LoginReducer
}))

export default store