import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Emoji from './Emoji'
import movies from './assets/movies.json'
import Movie from './Movie'

function App() {
  console.log(movies)
  return (
    <div className='grid grid-cols-3 space-y-10'>
      {movies.map(e => <Movie movie={e} />)}
    </div>
  )
}

export default App
