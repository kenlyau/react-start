import React from 'react'

export default function PostView ({post}) {
  return (
    <div>
      {Object.keys(post).map(key => (
        <p key={key}><span>{key}:&nbsp;</span>{post[key]}</p>
      ))}
    </div>
  )
}
