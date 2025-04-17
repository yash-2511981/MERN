import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import ErrorEle from './components/ErrorEle'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './components/User'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

function App() {
  
  const routes = createBrowserRouter([
    {
      path:'/admin',
      element:<Layout/>,
      errorElement:<ErrorEle/>,
      children:[
        {index:true,element:<Home/>},
        {path:"users",element:<User/>},
        {path:"users/add",element:<AddUser/>},
        {path:"users/edit/:id",element:<EditUser/>},
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
