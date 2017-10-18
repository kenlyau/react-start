import {createStore, combineReducers} from 'redux'
const context = require.context('./', true, /^\.\/(?!index).*\.js/)
const reducers = {}
context.keys().forEach(key => {
  let mod = require(`${key}`)
  reducers[mod.default.name] = mod.default
})

export default createStore(combineReducers(reducers))
