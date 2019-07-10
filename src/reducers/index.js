import { combineReducers } from 'redux'
import workoutReducer from './workouts'

const rootReducer = combineReducers({
  workouts: workoutReducer
})

export default rootReducer