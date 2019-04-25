import { createAction } from 'redux-actions'

export * from './sessionActions'

export const appInitStart = createAction('APP_INIT_START')
export const appInitFailure = createAction('APP_INIT_FAILURE')
export const appInitSuccess = createAction('APP_INIT_SUCCESS')

export const loadScheduleStart = createAction('LOAD_SCHEDULE_START')
export const loadScheduleFailure = createAction('LOAD_SCHEDULE_FAILURE')
export const loadScheduleSuccess = createAction('LOAD_SCHEDULE_SUCCESS')

export const loadEventStart = createAction('LOAD_EVENT_START')
export const loadEventFailure = createAction('LOAD_EVENT_FAILURE')
export const loadEventSuccess = createAction('LOAD_EVENT_SUCCESS')
