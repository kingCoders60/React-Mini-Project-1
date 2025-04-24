import React from 'react'
import {Route,Routes} from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Headers'
const App = () => {
  return (
    <div className="bg-black">
      <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element = {<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
