import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const defaultState = {
  isScheduleLoading: false,
  isEventLoading: false,
  schedule: null,
  event: null,
}

export default handleActions(
  {
    [actions.loadScheduleStart]: (state) => {
      return { ...state, schedule: null, isScheduleLoading: true }
    },
    [actions.loadScheduleFailure]: (state) => {
      return { ...state, schedule: null, isScheduleLoading: false }
    },
    [actions.loadScheduleSuccess]: (state, action) => {
      return { ...state, schedule: action.payload, isScheduleLoading: false }
    },

    [actions.loadEventStart]: (state) => {
      return { ...state, event: null, isEventLoading: true }
    },
    [actions.loadEventFailure]: (state) => {
      return { ...state, event: null, isEventLoading: false }
    },
    [actions.loadEventSuccess]: (state, action) => {
      return { ...state, event: action.payload, isEventLoading: false }
    },
  },
  defaultState,
)
