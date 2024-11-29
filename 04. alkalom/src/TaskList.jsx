import React from 'react'
import TaskListItem from './TaskListItem'

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul>
      {tasks.map(task => <TaskListItem task={task} key={task.id} tasks={tasks} setTasks={setTasks} />)}
    </ul>
  )
}

export default TaskList

