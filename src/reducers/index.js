import { combineReducers } from 'redux'
import workoutReducer from './workouts'
import quotesReducer from './quotes'

const rootReducer = combineReducers({
  workouts: workoutReducer,
  quotes: quotesReducer
})

export default rootReducer