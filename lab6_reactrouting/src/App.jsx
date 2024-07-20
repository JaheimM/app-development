import React from "react"
import Navbars from './components/navbars'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'

function App() {

  return (
    <>
     <h1 className="title">React Routing by Jahiem Mcleod</h1>
     <BrowserRouter>
     <Navbars />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
