import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/LoginGoogle.css';
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
        clientId="506897695183-bobcugoi9sed4kb5tu9h4evie0881843.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
     
    );
  }
}

export default googleLogin;

