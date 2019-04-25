import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from '../reducers'

const configureStore = (initialState, options = { logger: true }) => {
  const middleware = [thunk]

  let composeEnhancers = compose

  if (process.env.NODE_ENT !== 'production' && typeof window !== 'undefined') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  if (process.env.NODE_ENV !== 'production' && options.logger) {
    const { createLogger } = require('redux-logger')
    const logger = createLogger({ collapsed: true })
    middleware.push(logger)
  }

  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))
}

export default configureStore
