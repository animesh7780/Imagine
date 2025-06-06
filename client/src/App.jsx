import React, { useContext } from 'react'
import Home from './pages/Home'
import Result from './pages/REsult'
import BuyCredit from './pages/BuyCredit'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import {}

const App = () => {

  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b frm-teal-50 to-orange-50'>

      <Navbar/>

      {showLogin &&  <Login/>}

      <Routes>

      <Route path='/' element = {<Home/>}/>
      <Route path='/result' element = {<Result/>}/>
      <Route path='/credits' element = {<BuyCredit/>}/>
       
      </Routes>

      <Footer/>
      
    </div>
  )
}

export default App
