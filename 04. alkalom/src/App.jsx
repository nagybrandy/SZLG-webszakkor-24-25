import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './TaskList'
import AddNewTask from './AddNewTask'

const initialTasks = [
  { id: 1, title: "Buy groceries", todo: true },
  { id: 2, title: "Read a book", todo: true },
  { id: 3, title: "Write a report", todo: true },
  { id: 4, title: "Prepare presentation", todo: true },
  { id: 5, title: "Clean the house", todo: true },
  { id: 6, title: "Fix the faucet", todo: true },
  { id: 7, title: "Submit assignment", todo: false },
  { id: 8, title: "Call a friend", todo: false },
  { id: 9, title: "Finish a puzzle", todo: false },
  { id: 10, title: "Pay bills", todo: false }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  return (
    <>
      {/* AddNewTask: Bevitel új tennivaló felviteléhez*/}
      <AddNewTask setTasks={setTasks} tasks={tasks} />
      
      {/* TaskList: Ki vannak listázva a tennivalóink */}
      <TaskList tasks={tasks.filter(e => e.todo)} />

      {/* CompletedTasks: Ki vannak listázva a teljesített elemek */}
    </>
  )
}

export default App
