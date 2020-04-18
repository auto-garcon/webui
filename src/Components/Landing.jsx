import React from 'react';
import LogoLarge from './Images/AutoGarcon-Logo-Large.png';
import LogoSmall from './Images/AutoGarcon-Logo-Small.png'

import './CSS/Landing.css';
//var Link = require('react-router-dom').Link
function Landing() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={LogoLarge} className="App-logo" alt="logo" />
        <p className="landing">
          AUTO-GARCON
        </p>
      </header>
    </div>
  );
}

export default Landing;