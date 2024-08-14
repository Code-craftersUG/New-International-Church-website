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
import Post1 from './Components/Post1'
import Post2 from './Components/Post2'
import BlogPost from './Pages/BlogPost'
import Post3 from './Components/Post3'
import Post4 from './Components/Post4'
import Post5 from './Components/Post5'
import Post6 from './Components/Post6'
import Post7 from './Components/Post7'

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
      <Route path='blog/blogPost' element={<BlogPost/>}>
        <Route path='post1' element={<Post1/>} />
        <Route path='post2' element={<Post2/>} />
        <Route path='post3' element={<Post3/>} />
        <Route path='post4' element={<Post4/>} />
        <Route path='post5' element={<Post5/>} />
        <Route path='post6' element={<Post6/>} />
        <Route path='post7' element={<Post7/>} />
      </Route>
    </Routes>
  )
}

export default App
