import { useState } from 'react'
import './App.css'
//import './../dist/output.css'
import {Header} from './components/header/header'
import { Description } from './components/description/description'
import { Features } from './components/features.jsx/features'
import { Footer } from './components/footer/footer'
import { Landing } from './pages/landing/landing'
import { RouterProvider, createRoutesFromElements, redirect } from 'react-router-dom'
import { Main } from './pages/main/main'

function App() {
  const [count, setCount] = useState(0)

  const checkLogin = () => {
    let isLoggedIn = false;
    if (!isLoggedIn) {
      redirect("/about")
    }
  }
  return (
    <>
      <RouterProvider router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={Main}>
            <Route path="/about" element={<Landing/>}></Route>
          </Route>
        )
      )}></RouterProvider>
    </>
  )
}

export default App
