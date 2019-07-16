import { OPEN_WORKOUT_SET_MODAL, CLOSE_WORKOUT_SET_MODAL } from '../constants/modal/types'

const initialState = {
  show: false
}

// CURRENTLY SUPPORTS ONLY 1 MODAL, ADD MORE STATES FOR MORE MODALS
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_WORKOUT_SET_MODAL: {
      return {
        ...state,
        show: true
      }
    }
    case CLOSE_WORKOUT_SET_MODAL: {
      return {
        ...state,
        show: false
      }
    }
    default:
      return { ...state }
  }
}

export const openWorkoutModal = () => {
  return (dispatch) => {
    dispatch({ type: OPEN_WORKOUT_SET_MODAL })
  }
}

export const closeWorkoutModal = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_WORKOUT_SET_MODAL })
  }
}


export default modalReducer