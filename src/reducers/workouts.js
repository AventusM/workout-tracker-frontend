import { FETCH_ALL } from '../constants/workout/types'
import workoutService from '../services/workouts'

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
    default:
      return { ...state }
  }
}

export const fetchData = () => {
  // Async function allowed by redux thunk
  return async (dispatch) => {
    const workouts = await workoutService.getAll()
    dispatch({
      type: FETCH_ALL,
      data: workouts
    })
  }
}

export default workoutReducer