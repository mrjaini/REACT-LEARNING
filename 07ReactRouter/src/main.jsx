import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Github, { GitInfo } from './component/Github/Github.jsx'
import User from './component/User/User.jsx'

const router = createBrowserRouter([ // Create Router 
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
        element : <Github />,
        loader : GitInfo // GitInfo is variable
      },
      {
        path : "user/:userid",
        element : <User />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/> // router with "router" props
  </StrictMode>,
)
