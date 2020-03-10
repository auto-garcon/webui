import React from 'react';
import logo from './AUTO-GARCON-4.jpeg';

import './CSS/Home.css';
//var Link = require('react-router-dom').Link
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="home">
          Tickets or Menu page
        </p>
        <br></br><a href='/dashboard'><button>Menus</button></a>
        <br></br><a href='/dashboard'><button>Tickets</button></a>
      </header>
    </div>
  );
}

export default Home;