import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Add CSS file for styling

const NavBar = () => {
  return (
    <nav>
      <div className="logo">TW</div> {/* Custom logo or initials */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
