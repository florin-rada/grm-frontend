import { useState } from 'react'
import './App.css'
import './../dist/output.css'
import {Header} from './components/header/header'
import { Description } from './components/description/description'
import { Features } from './components/features.jsx/features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Description></Description>
      <Features></Features>
    </>
  )
}

export default App
