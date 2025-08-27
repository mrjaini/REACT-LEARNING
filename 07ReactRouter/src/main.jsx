import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/contact/Contact.jsx'
import Github from './component/github/Github.jsx'

const router = createBrowserRouter([
  {
    path :'/',
    element : <App/>,
    children : [
      // {
      //   index: true,
      //   element: <Home />
      // },
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact />
      },
      {
        path : "github",
        element : <Github />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)
