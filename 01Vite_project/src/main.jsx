import React from'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// -----hum function bna kr direct render kr skte h ----
// function MyApp() {
//   return (
//     <h1>This is my first vite project !!!</h1>
//   )
// }


// --- hum apne element iss trh create nhi kr skte property m object ka name kuch bhi lekr---
/*const reactElement = {
    type : 'a',
    props :{
        href : 'https://www.google.com',
        target : '_blank'
    },
    children : 'Click here to visit Google'
}
*/


// ----- Hum apna element iss trh render krwa skte h ------
/*const Aelement =(
    <a href = "https://www.google.com" target = '_blank'> Aelement Google</a>
      
   )
*/


// ------ Hum apne  element React se bnate h -----properties pata ho toh
/*
const ele = React.createElement(
  'a', {
    href : 'https://www.google.com',
    target : '_blank'
  },
  'this is react element'
)
  */

createRoot(document.getElementById('root')).render(
  < App />
)
