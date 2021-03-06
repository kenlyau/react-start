import 'object-assign-polyfill'
import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import App from './app'
import configureStore, {sagaMiddleware} from './store/configure-store'
import configureSaga from './saga/configure-saga'
import initalState from './services/initial-state'

import 'antd/dist/antd.less'
import './static/less/app.less'

const store = configureStore(initalState())
configureSaga(sagaMiddleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))
