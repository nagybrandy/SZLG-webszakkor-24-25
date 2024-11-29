import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddNewTask = ({ setTasks, tasks }) => {

  // CONTROLLED INPUT FIELD
  const [inputValue, setInputValue] = useState("")

  function handleInput(event) {
    setInputValue(event.target.value)
  }
  // ======================

  function handleClick() {
    if (inputValue.length >= 3) {
      const newId = tasks[tasks.length-1].id + 1
      
      const newTask = {
        id: newId,
        title: inputValue,
        todo: true,
      }

      setTasks([...tasks, newTask])
      toast.success(`TODO sikeresen hozzáadva: ${newTask.title}`)
      setInputValue("")
    } else {
      toast.error('Min. 3 karakternek kell lennie a TODO-nak.')
    }
  }

  return (
    <div>
      <input type="text" value={inputValue} onInput={handleInput} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddNewTask
