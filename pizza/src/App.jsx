import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Single from './components/Single'

function App() {


  return (
    <>
    <div className="container">

        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/single`${:id}`' element={<Single/>} />
            </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
