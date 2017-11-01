import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
import { Switch, Link, Route } from 'react-router-dom'
import Bundle from '../components/bundle'
import Home from './home'
import User from './user'
import { userLogout } from '../store/user'
const { Header, Content, Sider } = Layout

const Posts = (props) => (
  <Bundle load={require('bundle-loader?lazy&name=posts!./posts')}>
    {Comp => (
      Comp
        ? <Comp {...props} />
        : <Home />
    )}
  </Bundle>
)

const Post = (props) => (
  <Bundle load={require('bundle-loader?lazy&name=post!./post')}>
    {Comp => (
      Comp
        ? <Comp {...props}/>
        : <Home />
    )}
  </Bundle>
)

export class MainLayout extends React.Component {
  constructor (props) {
    super(props)
    this.defaultSelectedKeys = ['1']
    if (props.location && props.location.pathname) {
      if (props.location.pathname.indexOf('/posts') > -1) {
        this.defaultSelectedKeys = ['3']
      } else if (props.location.pathname.indexOf('/user') > -1) {
        this.defaultSelectedKeys = ['2']
      }
    }
    this.state = {
      collapsed: false
    }
    this.toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }
    this.logout = () => {
      this.props.dispatch(userLogout())
    }
  }
  render () {
    return (
      <Layout className="full-container">
        <Sider trigger={null}
          collapsible
          collapsed={this.state.collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={this.defaultSelectedKeys}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span>home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/user">
                <Icon type="user" />
                <span>user</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/posts">
                <Icon type="edit" />
                <span>posts</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="full-container">
          <Header className="layout-top-header">
            <Icon style={{float: 'right'}}
              type="logout"
              onClick={this.logout} />
            <Icon className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}/>
          </Header>
          <Content className="layout-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/user" component={User} />
              <Route path="/posts" exact component={Posts} />
              <Route path="/posts/:id" component={Post} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  return {
    global: state
  }
}

export default connect(mapStateToProps)(MainLayout)
