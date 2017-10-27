import React from 'react'
import {
  Avatar,
  Card
} from 'antd'

export default function Profile (props) {
  return (
    <Card className="profile" title="user profile">
      <Avatar size="large" style={{ backgroundColor: '#87d068' }} icon="user" />
      {Object.keys(props.user).map(key => (
        key !== 'ACL'
          ? <p key={key}><span>{key}:&nbsp;</span>{props.user[key]}</p>
          : null
      ))}
    </Card>
  )
}
