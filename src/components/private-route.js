import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuth} from '../services/auth'

export default function ({component: Component, path}) {
  return (
    <Route path={path} render={props => (
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }} />
      )
    )}/>
  )
}
