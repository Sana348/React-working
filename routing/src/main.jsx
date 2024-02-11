import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./Layout.jsx";
import Home from './components/Home/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {path: "", 
    element: <Home/>},
    {}
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
