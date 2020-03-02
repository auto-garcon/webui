import React from 'react';
import logo from './AUTO-GARCON-4.jpeg';

import './CSS/Tickets.css';
//var Link = require('react-router-dom').Link
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="home">
          Ticket Page
        </p>
      </header>
    </div>
  );
}

export default Home;