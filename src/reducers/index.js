import { combineReducers } from 'redux'
import workoutReducer from './workouts'
import quotesReducer from './quotes'
import modalReducer from './modal'
import authReducer from './auth'

const rootReducer = combineReducers({
  workouts: workoutReducer,
  quotes: quotesReducer,
  modal: modalReducer,
  auth: authReducer
})

export default rootReducer