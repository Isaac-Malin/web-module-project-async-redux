import { GET_ACTIVITY_SUCCESS } from "../actions"

const initialState = {
  activities: {
    activity: 'Learn to play a new instrument',
    type: 'music',
    price: '0.55',
    isFetching: false
  }
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ACTIVITY_SUCCESS:
      console.log(action)
      return {
        ...state,
        activities: action.payload
      }
    default:
      return state
  }
}