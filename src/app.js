import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import PrivateRoute from './containers/private-route'
import Login from './containers/login'
import MainLayout from './containers/layout'

import './static/less/style.less'

export default class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={MainLayout} />
        </Switch>
      </HashRouter>
    )
  }
}
