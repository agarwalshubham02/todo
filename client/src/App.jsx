import './App.css'
import Homepage from './components/Homepage'
import Form from './components/Registration/Form'
import Login from './components/Login/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/Login/User'
import Add from './components/Tasks/Add'
import ViewAll from './components/Tasks/ViewAll'
import ViewOne from './components/Tasks/ViewOne'
import Delete from './components/Tasks/Delete'

const router = createBrowserRouter([
    {
      path:"/",
      element: <Homepage/>,
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "register",
      element: <Form/>
    },
    {
      path: "home",
      element: <User/>
    },
    {
      path:"add",
      element: <Add/>
    },
    {
      path:"viewAll",
      element: <ViewAll/>
    },
    {
      path:"viewOne",
      element: <ViewOne/>
    },
    {
      path:"delete",
      element: <Delete/>
    }
  ]  
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
