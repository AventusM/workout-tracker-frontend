import { combineReducers } from 'redux'
import workoutReducer from './workouts'
import quotesReducer from './quotes'
import modalReducer from './modal'

const rootReducer = combineReducers({
  workouts: workoutReducer,
  quotes: quotesReducer,
  modal: modalReducer
})

export default rootReducer