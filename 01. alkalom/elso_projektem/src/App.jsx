import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hello name={"Bendi"} />
      <Hello name={"Ákos"} />
      <Hello name={"Lehel"} />
      <Hello name={"Tündi"} />
      <Hello name={"Mesi"} />
    </div>
  )
}

export default App
