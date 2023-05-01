import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/pages/Navbar'
import Banner from './components/pages/Banner'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar></Navbar>

    <div>
      <Outlet></Outlet>
    </div>


    
     
    </>
  )
}

export default App
