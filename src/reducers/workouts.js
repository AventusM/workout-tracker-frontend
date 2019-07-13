import { FETCH_ALL, CREATE } from '../constants/workout/types'
import { BASE_URL } from '../constants/workout/url'
import workoutService from '../services/index' // Can be named whatever. workoutService is fitting here though.

const initialState = {
  loaded: false,
  data: []
}


const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      return {
        ...state,
        loaded: true,
        data: action.data
      }
    }
    case CREATE: {
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    }
    default:
      return { ...state }
  }
}

export const fetchWorkouts = () => {
  // Async function allowed by redux thunk
  return async (dispatch) => {
    const workouts = await workoutService.getAll(BASE_URL)
    dispatch({
      type: FETCH_ALL,
      data: workouts
    })
  }
}

export const createWorkout = (workoutData) => {
  return async (dispatch) => {
    const responseWorkoutData = await workoutService.create(BASE_URL, workoutData)
    dispatch({
      type: CREATE,
      payload: responseWorkoutData
    })
  }
}

export default workoutReducer