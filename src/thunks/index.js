import fetch from 'cross-fetch'
import * as actions from '../actions'

const request = (url) => {
  return fetch(url).then((res) => res.json())
}

export const appInit = () => async (dispatch) => {
  await dispatch(loadSchedule())
}

export const loadSchedule = () => async (dispatch) => {
  dispatch(actions.loadScheduleStart())
  try {
    const response = await request('http://localhost:4000/event')
    if (response.success) {
      dispatch(actions.loadScheduleSuccess(response.data))
    } else {
      throw response
    }
  } catch (error) {
    dispatch(actions.loadScheduleFailure(error))
  }
}

export const loadEvent = (isoDate) => async (dispatch) => {
  dispatch(actions.loadEventStart())
  try {
    const response = await request(`http://localhost:4000/event/${isoDate}`)
    if (response.success) {
      dispatch(actions.loadEventSuccess(response.data))
    } else {
      throw response
    }
  } catch (error) {
    dispatch(actions.loadEventFailure(error))
  }
}
