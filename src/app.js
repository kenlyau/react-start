import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/private-route'
import Login from './containers/login'
import Home from './containers/home'

export default class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}
