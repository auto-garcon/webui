import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import About from './Components/About';
import NavBar from './Components/NavBar';
import GoogleLogin from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';
import LogoLarge from './Components/Images/AutoGarcon-Logo-Large.png';
import Settings from './Components/Settings';
import Footer from './Components/StickyFooter'
import CreateMenu from './Components/CreateMenu';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LocalStorage from 'local-storage';

const DEV = "1020443801830-kjm2qo4ujk27smhn9n7l7j33ojlaecpt.apps.googleusercontent.com"
const PROD = "1020443801830-prp10hjgd1r8pc6pue3br9mkjphn1qic.apps.googleusercontent.com"
const PRODAPI = "https://autogarcon.live/api/users/newuser"
const DEVAPI = "http://localhost/api/users/newuser"

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthed: false,
      responseGoogle: (response, e) => {
        e.preventDefault();
        //console.log(response);
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
        if(response != null) {
          this.setState({
            user: response,
            isAuthed: true
          });
          LocalStorage.set('user', response);
        }
      },
    }
  }

  render() {
    return (
      <div className = "App">
        { !this.state.isAuthed ? (
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
                  clientId={DEV}
                  buttonText="Continue with Google"
                  onSuccess={this.state.responseGoogle}
                  onFailure={this.state.responseGoogle}
                />
              </div>
            </div>
          </div>
        ) : ( 
            <Router>
              <NavBar />
              <Route exact={true} path="/" component={Dashboard}>
              </Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/settings">
                <Settings restid={1234} tables={5}/>
              </Route>
              <Route path="/createmenu" component={CreateMenu}></Route>
              <Footer />
            </Router>
        )}
      </div>
    )
  } 
}