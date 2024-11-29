import React from 'react'

const CompletedTaskItem = ({ task }) => {
  return (
    <li className='done'>
      {task.title}
    </li>
  )
}

export default CompletedTaskItem
