import React from 'react'
import {connect} from 'react-redux'
import Profile from '../components/profile'

export class User extends React.Component {
  render () {
    return (
      <Profile user={this.props.user} />
    )
  }
}

export function mapStateToProps (state) {
  return {
    user: state.user.auth
  }
}

export default connect(mapStateToProps)(User)
