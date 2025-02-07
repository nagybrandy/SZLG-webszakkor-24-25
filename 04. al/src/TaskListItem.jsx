import React from 'react'


const TaskListItem = ({ task, tasks, setTasks }) => {

  function handleClick() {

    // KÖVETKEZŐ ÓRÁN KIJAVÍTANI
    let ind = tasks.indexOf(task)
    task.todo = false
    setTasks([...tasks, task])
  }

  return (
    <li onClick={handleClick}>
        {task.title}
    </li>
  )
}

export default TaskListItem
