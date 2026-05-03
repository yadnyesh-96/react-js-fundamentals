import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from 'components/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    Children:[
      {
        path:"",
        element:<Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
