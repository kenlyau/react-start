import React from 'react'
import { Table } from 'antd'
import { getPosts } from '../api/'

const columns = [
  {
    title: 'objectId',
    dataIndex: 'objectId',
    key: 'objectId'
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'content',
    dataIndex: 'content',
    key: 'content'
  },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
    kye: 'createdAt'
  }
]

export default class Posts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      loading: false
    }
    this.rowClick = row => {
      this.props.history.push('/posts/' + row.objectId)
    }
  }
  fetch () {
    this.setState({loading: true})
    getPosts()
      .then(res => {
        this.setState({
          posts: res.results,
          loading: false
        })
      })
  }
  componentDidMount () {
    this.fetch()
  }
  render () {
    return (
      <Table onRowClick={this.rowClick} loading={this.state.loading} rowKey="objectId" dataSource={this.state.posts} columns={columns} />
    )
  }
}
