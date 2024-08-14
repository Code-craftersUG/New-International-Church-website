import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { Routes, Route } from 'react-router-dom'
import Sermons from './Pages/Sermons'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import SermonEvents from './Pages/SermonEvents'
import SermonEvent1 from './Components/SermonEvent1'
import SermonEvent2 from './Components/sermonEvent2'
import SermonEvent3 from './Components/SermonEvent3'
import SermonEvent4 from './Components/SermonEvent4'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sermon' element={<Sermons/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='sermon/sermonEvent' element={<SermonEvents/>}>
        <Route path='event1' element={<SermonEvent1/>} />
        <Route path='event2' element={<SermonEvent2 />} />
        <Route path='event3' element={<SermonEvent3 />} />
        <Route path='event4' element={<SermonEvent4 />} />
      </Route>
    </Routes>
  )
}

export default App
