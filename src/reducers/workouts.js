import { FETCH_ALL } from '../constants/workout/types'

const initialState = {
  data: []
}


const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      return {
        ...state,
        data: action.data
      }
    }
    default:
      return { ...state }
  }
}

export default workoutReducer