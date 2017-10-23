const context = require.context('./', true, /^\.\/(?!configure-saga).*\.js/)
const sagas = {}
context.keys().forEach(key => {
  let mod = require(`${key}`)
  sagas[mod.default.name] = mod.default
})

export default function configureSaga (sagaMiddleware) {
  Object.keys(sagas).map(key => sagaMiddleware.run(sagas[key]))
}
