import React from 'react';
import logo from './AUTO-GARCON-4.jpeg';

import './CSS/About.css';
//var Link = require('react-router-dom').Link
function About() {
    return (
    <div className="About">
    <header className="About">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="about">
        About Page
        

      </p>
      
    </header>
  </div>
    );
}

export default About;