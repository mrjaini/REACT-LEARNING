import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setcounter] = useState(0)
  const addvalue = ()=>{
    if(counter < 20 ){
      setcounter(counter+1)
    }
    console.log("Value Add" ,counter )
  }
  const removevalue = () =>{
    if(counter > 0)
    setcounter(counter - 1)
    console.log("value removed" , counter)
  }
  return (
    <>
      <h1>Vite ka pehhla project</h1>
      <h3>button press time : {counter}</h3>
      <button onClick={addvalue}>Add value {counter} </button>
      <br />
      <button onClick={removevalue}>remove value {counter} </button>
    </>
  )
}

export default App
