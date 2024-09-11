// Importing React to use JSX and create the component.
import React from "react";

// Importing the CSS file for styling the NavBar component.
import "./NavBar.css";

// Importing Link component from 'react-router-dom' to enable navigation between routes without reloading the page.
import { Link } from "react-router-dom";

// Defining the NavBar component as a functional component.
const NavBar = () => {
  // The component's return statement, rendering the navigation bar UI.
  return (
    <>
      {/* The main navigation element with a CSS class 'navbar' for styling. */}
      <nav className="navbar">
        {/* Logo section of the navbar, linking to the home page ("/"). */}
        <div className="navbar-logo">
          {/* Using Link component to navigate to the home route ("/") when the logo is clicked. */}
          <Link to="/">LOGO</Link>
        </div>

        {/* Unordered list for the navigation links with a CSS class 'navbar-links' for styling. */}
        <ul className="navbar-links">
          {/* Each list item contains a Link component to navigate to different routes within the application. */}
          
          {/* Link to the home page ("/"). */}
          <li><Link to="/">Home</Link></li>

          {/* Link to the about page ("/about"). */}
          <li><Link to="/about">About</Link></li>

          {/* Link to the services page ("/services"). */}
          <li><Link to="/services">Services</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
