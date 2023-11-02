import axios from "axios"

export const GET_ACTIVITY = 'GET_ACTIVITY'
export const GET_ACTIVITY_SUCCESS = 'GET_ACTIVITY_SUCCESS'


export const getActivity = () => dispatch => {
  axios.get('https://www.boredapi.com/api/activity')
    .then(res => {
      const activity = res.data
      dispatch(getActivitySuccess(activity))
    })
    return {type: GET_ACTIVITY, payload: {data: 'Hello'}}
}

const getActivitySuccess = (activities) => {
  return {type: GET_ACTIVITY_SUCCESS, payload: activities}
}