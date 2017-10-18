import React from 'react'
import {Form, Icon, Input, Button} from 'antd'
const FormItem = Form.Item

export default class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleInput (type, e) {
    let tmp = {}
    tmp[type] = e.target.value
    this.setState(Object.assign({}, this.state, tmp))
  }
  render () {
    return (
      <Form className="login-form">
        <FormItem>
          <Input prefix={<Icon type="user" />} placeholder="username" onChange={e => this.handleInput('username', e)} />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" />} placeholder="password" onChange={e => this.handleInput('password', e)} />
        </FormItem>
        <FormItem>
          <Button onClick={() => this.props.handleSubmit(this.state)} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}
