import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Counter from './components/Counter';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import State from './components/State';
const App = () => {
  return (
   <Router>
    <NavBar/>
    <State/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    
   </Router>
  )
}

export default App;


