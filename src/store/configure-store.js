import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
const context = require.context('./', true, /^\.\/(?!configure-store).*\.js/)
const reducers = {}
context.keys().forEach(key => {
  let mod = require(`${key}`)
  reducers[mod.NAME] = mod.default
})

const logger = createLogger()

export const sagaMiddleware = createSagaMiddleware()

export default function configureStore (initalState = {}) {
  console.log('initalState ==>', initalState)
  console.log(reducers)
  return createStore(
    combineReducers(reducers),
    initalState,
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )
}
