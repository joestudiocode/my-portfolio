import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { About } from './component/About'
import Home from './component/Home'
import NotFound from './component/NotFound'
import Main from './component/Main'

const App = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Main/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<About/>}/>
      <Route path='/task-board' element={<About/>}/>
      <Route path='/chat' element={<About/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
