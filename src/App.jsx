import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { About } from './component/About'
import Home from './component/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default App
