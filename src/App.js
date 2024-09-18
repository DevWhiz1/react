import React from 'react'
// Importing required components from 'react-router-dom'.
// BrowserRouter is used to enable routing in the application.
// Routes is used to group Route components.
// Route is used to define individual routes for navigation.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

// Importing custom components for different sections of the application.
import Counter from './components/Counter'; // This component isn't used currently.
import Home from './components/Home'; // Component for the home page.
import About from './components/About'; // Component for the about page.
import Services from './components/Services'; // Component for the services page.
import NavBar from './components/NavBar'; // Component for navigation bar.
import Footer from './components/Footer'; // Component for footer.
import State from './components/State'; // This component is currently rendered outside of routing.
import UserForm from './components/UserForm';

const App = () => {
  return (
    // Router component wraps the entire application enabling routing.
    <Router>
      {/* NavBar component will be rendered at the top of every page, as it's placed outside the Routes. */}
      <NavBar/>
      <UserForm/>
      {/* State component is rendered here; it's not a part of the defined routes. */}
      <State/>

      {/* Routes component is used to define different routes for the application. */}
      <Routes>
        {/* Each Route defines a path and the component to render when that path is accessed. */}
        
        {/* Route for the home page, rendered when the path is exactly '/' (root of the application). */}
        <Route path='/' element={<Home/>}/>

        {/* Route for the about page, rendered when the URL path is '/about'. */}
        <Route path='/about' element={<About/>}/>

        {/* Route for the services page, rendered when the URL path is '/services'. */}
        <Route path='/services' element={<Services/>}/>
      </Routes>
      
      {/* Footer component isn't included but can be placed here if needed to be displayed on all routes. */}
      <Footer/>
     
    </Router>  )
}

export default App;
