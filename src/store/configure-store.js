import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
const context = require.context('./', true, /^\.\/(?!configure-store).*\.js/)
const reducers = {}
context.keys().forEach(key => {
  let mod = require(`${key}`)
  reducers[mod.default.name] = mod.default
})

const logger = createLogger()

export const sagaMiddleware = createSagaMiddleware()

export default function configureStore (initalState = {}) {
  console.log('initalState ==>', initalState)
  return createStore(
    combineReducers(reducers),
    initalState,
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )
}
