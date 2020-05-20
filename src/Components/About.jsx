/* This is the component for the about page. This is a static page to display a short description 
about autogarcon as well as contact information */

import React from 'react';
import logo from './Images/AutoGarcon-Logo-Large.png';
import './CSS/About.css';
//var Link = require('react-router-dom').Link

function About() {
    return (

      <div className="about-section">
 
        <h1>About Auto-Garcon</h1>
        <p>Auto-Garcon redefines dining by adding seemless technology into modern restaurants.</p>
        <h2>Contact Us</h2>
        <p>Phone: 000.000.0000 Email: autogarcon@autogarcon.com</p>
    </div>
    
  );
}

export default About;