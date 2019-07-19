import { LOG_IN, LOG_OUT, SET_USER } from '../constants/auth/types'
import { LOGIN_URL, CURRENT_USER_URL } from '../constants/auth/url'
import authService from '../services/index'

const initialState = {
  logged_in: false,
  user: null
}

// logged in changes -> app.js runs effect to SET_USER to whatever is current_user path
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        logged_in: true, // App.js runs effect once at beginning. This is check for cookies on refresh etc.
        user: action.user
      }
    }
    case LOG_IN: {
      return {
        ...state,
        logged_in: true
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        logged_in: false
      }
    }
    default:
      return { ...state }
  }
}

export const login = (credentials) => {
  return async (dispatch) => {
    console.log('credentials', credentials)
    //1. perform login (auth controller)
    await authService.create(LOGIN_URL, credentials)
    //2.1. If succesful (newUser data is valid) -> dispatch logged in true
    //2.2. If unsuccesful (server returns error etc?) then dispatch with null?

    dispatch({ type: LOG_IN })
  }
}

export const setUser = () => {
  return async (dispatch) => {
    const userData = await authService.getAll(CURRENT_USER_URL)
    if (!userData._id) return
    
    dispatch({
      type: SET_USER,
      user: userData
    })
  }
}



export default authReducer