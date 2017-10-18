import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import App from './app'
import store from './store/'
import './static/css/style.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))
