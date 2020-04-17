import React from 'react';
import logo from './Images/AutoGarcon-Logo-Large.png';
import './CSS/About.css';
//var Link = require('react-router-dom').Link

function About() {
    return (

      <div className="about-section">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>About Auto-Garcon</h1>
        <p>Auto-Garcon redefines dining by adding seemless technology into modern restaurants.</p>
        <h2>Contact Us</h2>
        <p>Phone: 952.828.1909 Email: autogarcon@autogarcon.com</p>
    </div>
    
  );
}

export default About;