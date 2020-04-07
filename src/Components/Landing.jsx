import React from 'react';
import logo from './logo.jpeg';

import './CSS/Landing.css';
//var Link = require('react-router-dom').Link
function Landing() {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Landing">
          AUTO-GARCON   
          <br></br><a href="/login">Login</a>
        </p>
      </header>
    </div>
  );
}

export default Landing;