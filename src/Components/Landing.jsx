import React from 'react';
import logo from './AUTO-GARCON-4.jpeg';

import './CSS/Landing.css';
//var Link = require('react-router-dom').Link
function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="landing">
          AUTO-GARCON
          <br></br><a href="/login">Login</a>
        </p>
      </header>
    </div>
  );
}

export default Landing;