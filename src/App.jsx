import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import Couses from './Components/Couses'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { createBrowserRouter,RouterProvider } from "react-router-dom";



function App() {
  const router= createBrowserRouter([
    {path:"/",
      element: <><Navbar/><Home/><Footer/></>
    },{
      path:"/about",
      element:<> <Navbar/><About/><Footer/></>
    },{
      path:"/user/:username",
      element:<> <Navbar/><User/><Footer/></>
    },
    {
      path:"/Couses",
      element:<> <Navbar/><Couses/><Footer/></>
    },
    {
      path:"/Contact",
      element:<> <Navbar/><Contact/><Footer/></>
    },
])
  return (
    <>
   
  < RouterProvider router={router}/>
    </>
  )
}

export default App
