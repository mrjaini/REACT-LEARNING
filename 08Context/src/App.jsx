import { useState } from 'react'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Context with chai aur code</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
