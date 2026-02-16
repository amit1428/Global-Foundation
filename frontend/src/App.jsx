import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/AboutPage/About'
import ContactPage from './Pages/ContactPage/ContactPage'
import StoriesPage from './Pages/StoriesPage/StoriesPage'
import WorkPage from './Pages/WorkPage/WorkPage'
import NarrativePage from './Pages/NarrativePage/NarrativePage'
import HelpPage from './Pages/HelpPage/HelpPage'
import DonersPage from './Pages/DonersPage/DonersPage'
import BlogsPage from './Pages/BlogsPage/BlogsPage'
import GallaryPage from './Pages/GallaryPage/GallaryPage'
const App = () => {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Home/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<ContactPage/>} />
     <Route path='/stories' element={<StoriesPage/>} />
     <Route path='/work' element={<WorkPage/>} />
     <Route path='/narrative' element={<NarrativePage/>} />
     <Route path='/help' element=
     {<HelpPage/>} />
     <Route path='/blogs' element={<BlogsPage/>}/>
     <Route path='/contributors' element={<DonersPage/>} />
     <Route path='/gallary' element={<GallaryPage/>} />
    </Routes>
    </div>
  )
}

export default App