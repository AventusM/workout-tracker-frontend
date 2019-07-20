import { LOG_IN, LOG_OUT, SET_USER } from '../constants/auth/types'
import { LOGIN_URL, CURRENT_USER_URL, LOGOUT_URL } from '../constants/auth/url'
import authService from '../services/index'

const initialState = {
  loading_user: true,
  logged_in: false,
  user: null
}

// logged in changes -> app.js runs effect to SET_USER to whatever is current_user path
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        loading_user: false,
        logged_in: action.logged_in,
        user: action.user
      }
    }
    case LOG_IN: {
      return {
        ...state,
        loading_user: false,
        logged_in: true
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        logged_in: false,
        user: null
      }
    }
    default:
      return { ...state }
  }
}

export const login = (credentials) => {
  return async (dispatch) => {
    //1. perform login (auth controller)
    await authService.create(LOGIN_URL, credentials)
    //2.1. If succesful (newUser data is valid) -> dispatch logged in true
    //2.2. If unsuccesful (server returns error etc?) then simply return here

    dispatch({ type: LOG_IN })
  }
}

export const logout = () => {
  return async (dispatch) => {
    await authService.getAll(LOGOUT_URL)
    dispatch({ type: LOG_OUT })
  }
}

export const setUser = () => {
  return async (dispatch) => {
    const userData = await authService.getAll(CURRENT_USER_URL)
    dispatch({
      type: SET_USER,
      user: userData.hasOwnProperty('message') ? null : userData,
      logged_in: userData.hasOwnProperty('message') ? false : true
    })
  }
}



export default authReducer