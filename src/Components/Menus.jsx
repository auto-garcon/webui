import React from 'react';
import logo from './AUTO-GARCON-4.jpeg';

import './CSS/Menus.css';
//var Link = require('react-router-dom').Link
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="home">
          MENU PAGE
        </p> 
        <br></br><a href='/addMenu'><button>Add A Menu</button></a>
      </header>
    </div>
  );
}

export default Home;