import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className = 'bg-yellow-500 text-black rounded-xl p-4 mb-2'>tailwind test</h1>
     <Card username="my first project commponent " />
     <Card />
    </>
  )
}

export default App
