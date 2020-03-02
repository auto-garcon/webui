import React from 'react';
import logo from './AUTO-GARCON-4.jpeg';

import './CSS/AddMenu.css';
//var Link = require('react-router-dom').Link
function Home() {
  return (
    <div className="Add-Menu">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="home">
          Add Menu Page
        </p>
        <br></br><label htmlFor='Menu Type'> Menu Type</label>
            <input
                id = 'Menu Type'
                type = 'text'
            ></input>
        <br></br><label htmlFor='Dish Name'> Dish Name</label>
            <input
                id = 'Dish Name'
                type = 'text'
            ></input>
        <br></br><button>Save</button>
        <button>Save and Publish</button>
      </header>
    </div>
  );
}

export default Home;