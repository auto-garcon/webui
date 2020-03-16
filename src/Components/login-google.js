import React, { Component } from 'react';
import './App.css';


import GoogleLogin from 'react-google-login';

class googleLogin extends Component {

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="googleLogin">
        <h1>LOGIN WITH GOOGLE</h1>

      
      <GoogleLogin
        clientId="378032335699-7gatiml6cetk8io03tdtoq4tlb0q9qkp.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default googleLogin;