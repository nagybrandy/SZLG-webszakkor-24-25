import React from 'react'
import Emoji from './Emoji'

const Hello = ({name, age}) => {
  return <h1>Hello {name}! <Emoji /> {age}</h1>
}

export default Hello
