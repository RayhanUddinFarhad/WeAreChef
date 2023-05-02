import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/pages/Navbar'
import Banner from './components/pages/Banner'
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar></Navbar>

    <div className='md:min-h-[calc(100vh-341px)]'>
      <Outlet></Outlet>
    </div>

    <Footer></Footer>



    <ToastContainer></ToastContainer>
     
    </>
  )
}

export default App
