import { createStore } from 'redux'

import LoginReducer  from '../reducers/login'

const store = createStore(LoginReducer)

export default store