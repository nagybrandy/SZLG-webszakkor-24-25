import React from 'react'
import TaskListItem from './TaskListItem'

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => <TaskListItem task={task} key={task.id} />)}
    </ul>
  )
}

export default TaskList

