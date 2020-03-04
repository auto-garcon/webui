import React from 'react';
import logo from './AUTO-GARCON-4.jpeg';
import './CSS/SignUp.css';
//var Link = require('react-router-dom').Link
function SignUp() {
  return (
    <div className="SignUp">
        <img src={logo} className="App-logo" alt="logo" />
        <title> SignUp</title>
          <div className = "SignUp-Container">
            <label htmlFor='firstName'> First Name</label>
            <input
                id = 'firstName'
                type = 'text'
            ></input>
            <label htmlFor='lastName'> Last Name</label>
            <input
                id = 'lastName'
                type = 'text'
            ></input>
            <br></br><a href='/home'><button>Submit</button></a>
         </div>
 
         <br></br><a href="/login">Go Back</a>
    </div>
  );
}

export default SignUp;