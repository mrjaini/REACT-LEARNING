import { useState ,useCallback , useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [characters, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const passRef = useRef(null)
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(number) str += "0123456789"
    if(characters) str += "!@#$%^&*{}[]?"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);
  } , [length,number,characters , setPassword])

  const passtoClip = useCallback(() =>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  const hoverf = useCallback(() => {
    passRef.current?.select();
  } , [password])
  useEffect(() => {
    passwordGenerator();
  }, [number,length, characters])

  return (
    <>
      <div className='w-full max-w-md mx-auto py-1 my-10 shadow-lg rounded-3xl bg-gray-500'>
        <h1 className='text-center text-black text-4xl my-3'>PassWord Generator</h1>

        <div className='flex overflow-hidden text-black  mx-3 my-3 shadow-lg rounded-2xl bg-white '>
          
          <input type="text"
          value = {password}
          className='outline-none w-full py-1 px-3' 
          placeholder='Generate your password'
          readOnly
          ref ={passRef}
          />

          <button
          onClick= {passtoClip}
           className='outline-none text-black bg-blue-500 font-bold shrink-0 px-4 '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-4 mx-5'>


          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) =>{
            setLength(e.target.value)
            }} />
            <label className='font-medium text-sm'>Length : {length}</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {number}
            id ="numberinput"
            onChange={() =>{
              setNumber((prev) => !prev)
            }} />
            <label className='text-sm font-medium'>Number</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {characters}
            id ="charid"
            onChange={() =>{
              setCharacter((characters) => !characters)
            }} />
            <label className='text-sm font-medium'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
