import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => {
      console.log(rest)
      return rest.user.auth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }} />
      )
    }}/>
  )
}

export function mapStateToProps (state) {
  console.log(state)
  return {
    user: state.user || {}
  }
}

export default connect(mapStateToProps)(PrivateRoute)
