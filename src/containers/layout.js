import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
const { Header, Content, Sider } = Layout

export class MainLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
    this.toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }
  }
  render () {
    return (
      <Layout className="full-container">
        <Sider trigger={null}
          collapsible
          collapsed={this.state.collapsed}>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Icon type="user" />
              <span>user</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="edit" />
              <span>posts</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="full-container">
          <Header style={{background: '#ffffff', padding: 0}}>
            <Icon className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}/>
          </Header>
          <Content className="layout-content">content</Content>
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
