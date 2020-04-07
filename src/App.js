import React, {useState, useEffect} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Dashboard from './Components/Dashboard'
import Contact from './Components/Contact'
import About from './Components/About'
import NavBar from './Components/NavBar'
import GoogleLogin from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LogoLarge from './Components/Images/AutoGarcon-Logo-Large.png';
import Link from '@material-ui/core/Link'
import { Router, Route } from 'react-router-dom';
import { Switch } from '@material-ui/core';



const DEV = "1020443801830-kjm2qo4ujk27smhn9n7l7j33ojlaecpt.apps.googleusercontent.com"
const PROD = "1020443801830-prp10hjgd1r8pc6pue3br9mkjphn1qic.apps.googleusercontent.com"
const PRODAPI = "https://autogarcon.live/api/users/newuser"
const DEVAPI = "http://localhost/api/users/newuser"


export default function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    console.log("LOGGED IN !")
  },[loggedIn]);

  const [value, setValue] = React.useState(0);
 
  function responseGoogle(response) {
    //console.log(response);
    setLoggedIn(true);
    // fetch(DEVAPI, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': '*/*',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin' : '*'
    //   },
    //   body: JSON.stringify(response)
    // })
    // .then(res => console.log(res))
    // .then(data => console.log(data))
    // .catch(err => console.log("FAILED", err));
  }
  return (
    <>
    {!loggedIn?
      <>
      
        <div className="Landing-Background">
          <div className="Login-Modal">
            <div className="Login-Header"> 
              <header className="App-header">
                <img src={LogoLarge} className="App-logo" alt="logo" />
                <h1>AUTO-GARCON</h1>
              </header>
              </div>
              <div className="Login-Container">
                <LockOutlinedIcon color="inherit" />
                <br></br>
                <GoogleLogin
                  clientId={DEV} //CLIENTID NOT CREATED YET
                  buttonText="Continue with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
            </div>
          </div>
        </div>
        <Typography variant="body2" color="textSecondary" className="Footer">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/" >
            AUTO-GARÇON
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
          <Link to="/about" className="dad" style={{justifyContent:"right"}} >
            About
          </Link>
          <Link to="/contact" className="dad" style={{textAlign:"right"}}>
            Contact Us
          </Link>
        </Typography>
      </>
      :
      <> 
        <NavBar />
        
          <Dashboard />
        <Typography variant="body2" color="textSecondary" className="Footer">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            AUTO-GARÇON
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
          <ul>
            <li>
              <Link to="/about" className="Link" >
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="Link">
                Contact Us
              </Link>
            </li>
          </ul>
        </Typography>
        
          <Switch>
            <Route path ='/about'>
              <About />
            </Route>
            <Route path ='/contact'>
              <Contact />
            </Route>
          </Switch>
        
      </>
    }
    </> 
  )
}