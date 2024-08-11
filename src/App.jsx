import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { Routes, Route } from 'react-router-dom'
import Sermons from './Pages/Sermons'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sermon' element={<Sermons/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
