import React from 'react';
import logo from './AUTO-GARCON-4.jpeg';
import './CSS/Login.css';
//var Link = require('react-router-dom').Link
function Login() {
  return (
    <div className="Login">
        <img src={logo} className="App-logo" alt="logo" />
        <title> Login</title>
          <div className = "login-container">
            <label htmlFor='username'> Username</label>
            <input
                id = 'username'
                type = 'text'
            ></input>
            <br></br><label htmlFor='password'> Password</label>
            <input
                id = 'password'
                type = 'text'
            ></input>
            <br></br><a href="/signup">Sign Up</a>
            <br></br><a href='/home'><button>Submit</button></a>
         </div>
 
         <br></br><a href="/">Go Back</a>
    </div>
  );
}

export default Login;