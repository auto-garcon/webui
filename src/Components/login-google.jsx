import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/LoginGoogle.css';
import GoogleLogin from 'react-google-login';

class googleLogin extends Component {

  render() {
    const DEV = "1020443801830-kjm2qo4ujk27smhn9n7l7j33ojlaecpt.apps.googleusercontent.com"
    const PROD = "1020443801830-prp10hjgd1r8pc6pue3br9mkjphn1qic.apps.googleusercontent.com"
    const PRODAPI = "https://autogarcon.live/api/users/newuser"
    const DEVAPI = "http://localhost:4567/api/users/newuser"

    function responseGoogle(response) {
      //console.log(response);
      fetch(PRODAPI, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify(response)
      })
      .then(data => console.log(data))
      .catch(err => console.log("FAILED", err));
    }

    return (
      <div className="googleLogin">
        <h1>LOGIN WITH GOOGLE</h1>

      
      <GoogleLogin
        clientId={PROD} //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
     
    );
  }
}

export default googleLogin;

