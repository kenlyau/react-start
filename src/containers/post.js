import React from 'react'
import PostView from '../components/post-view'
import { getPost } from '../api/'

export default class Post extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {}
    }
    this.id = props.match.params.id
  }
  componentDidMount () {
    getPost(this.id)
      .then(res => {
        this.setState({post: res})
      })
  }
  render () {
    return <PostView post={this.state.post} />
  }
}
