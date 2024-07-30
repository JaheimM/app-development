import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Works from './components/pages/Works'
import SignUp from './components/pages/SignUp'
import About from './components/pages/About'
import './index.css'

function App() {

  // props, router, than states
  // router for links, states for form (username, password, and email), and props for cards info and modal windows
  // must have cards to select, 
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
