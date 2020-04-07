import React from 'react';
import logo from './logo.jpeg';

import './CSS/Home.css';
//var Link = require('react-router-dom').Link
function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="logo" alt="logo" />
        <p className="home">
          Tickets
        </p>
        <br></br><a href='/dashboard'><button>Menus</button></a>
        <br></br><a href='/dashboard'><button>Tickets</button></a>
      </header>
    </div>
  );
}

export default Home;