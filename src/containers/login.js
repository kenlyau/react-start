import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { Redirect } from 'react-router-dom'
import LoginForm from '../components/login-form'
import { userLogin } from '../store/user'
const { Header, Content } = Layout

export class Login extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = ({username, password}) => {
      this.props.dispatch(userLogin(username, password))
    }
  }
  render () {
    if (this.props.user.auth) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <Layout className="full-container">
        <Header className="login-header"><h1>React Start</h1></Header>
        <Content>
          <LoginForm handleSubmit={this.handleSubmit} />
        </Content>
      </Layout>
    )
  }
}

export function mapToStateProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapToStateProps)(Login)
