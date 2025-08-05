import { useState } from 'react'

function App() {
  const [color , setColor] = useState("olive")
  return (
    <div className='w-screen h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-full'>
        <button onClick={() =>{
          setColor("red")
        }} className='text-white shadow-lg px-4 py-2 rounded-full' style={{backgroundColor : "red"}}>Red</button>
        <button onClick={() =>{
          setColor("black")
        }} className='text-white px-4 py-2 rounded-full' style={{backgroundColor : "black"}}>Black</button>
        <button onClick={() =>{
          setColor("blue")
        }} className='text-white px-4 py-2 rounded-full' style={{backgroundColor : "blue"}}>Blue</button>
        <button onClick={() =>{
          setColor("green")
        }} className='text-white px-4 py-2 rounded-full' style={{backgroundColor : "green"}}>Green</button>
        <button onClick={() =>{
          setColor("purple")
        }} className='text-white px-4 py-2 rounded-full' style={{backgroundColor : "purple"}}>Puple</button>
        <button onClick={() =>{
          setColor("yellow")
        }} className='text-black px-4 py-2 rounded-full' style={{backgroundColor : "yellow"}}>Yellow</button>
        <button onClick={() =>{
          setColor("lavender")
        }} className='text-black px-4 py-2 rounded-full' style={{backgroundColor : "#E6E6FA"}}>Lavender</button>
      </div>
      </div>
    </div>
  )
}

export default App
