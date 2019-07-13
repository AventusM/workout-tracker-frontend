import { FETCH_ALL } from '../constants/quote/types'
import { BASE_URL } from '../constants/quote/url'
import quoteService from '../services/index'

const initialState = {
  loaded: false,
  data: null
}


const quotesReducer = (state = initialState, action) => {
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

// SHOULD BE CHANGED TO GET JUST ONE
// SHOULD BE CHANGED TO GET JUST ONE
export const fetchQuotes = () => {
  return async (dispatch) => {
    // const response = await quoteService.getAll(BASE_URL)
    dispatch({
      type: FETCH_ALL,
      data: { quote: 'Life sucks and then you die!', by: 'Vince McMahon' }
    })
  }
}

export default quotesReducer