import React from 'react'

const AddNewTask = ({ setTasks, tasks }) => {
  
    const newTask = {
    id: 10,
    title: "Hello",
    todo: true,
  }

  function handleClick(){
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddNewTask
