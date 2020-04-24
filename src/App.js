import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import About from './Components/About';
import NavBar from './Components/NavBar';
import GoogleLogin from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import LinearProgress from '@material-ui/core/LinearProgress';
import LogoLarge from './Components/Images/AutoGarcon-Logo-Large.png';
import Settings from './Components/Settings';
import Footer from './Components/StickyFooter'
import CreateMenu from './Components/CreateMenu';
import LoginVid from './Components/Images/Login-VID.mp4';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

/** Test Google login keys and API links */
//const DEV = "1020443801830-kjm2qo4ujk27smhn9n7l7j33ojlaecpt.apps.googleusercontent.com"
const PROD = "1020443801830-prp10hjgd1r8pc6pue3br9mkjphn1qic.apps.googleusercontent.com"
// const PRODAPI = "https://autogarcon.live/api/users/newuser"
// const DEVAPI = "http://localhost/api/users/newuser"

/**
 * The App class component is the root of this application.
 * Here we handle authentication state and routing to 
 * every other part of the application once authentication 
 * can be confirmed.
 */
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthed: false,
      responseGoogle: (response, e) => {
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
        //  .then(data => {
        //   console.log(data)
        //   const expires = ( 60 * 60) * 1000
        //   const inOneHour = new Date(new Date().getTime() + expires)
        //   Cookies.set('access_token_autog', response.tokenObj.access_token, { expires: inOneHour });
        // })
        // .catch(err => console.log("FAILED", err));
        const expires = ( 60 * 60) * 1000
        const inOneHour = new Date(new Date().getTime() + expires)
        Cookies.set('access_token_autog', response.tokenObj.access_token, { expires: inOneHour });
        this.state.handleGoogleRespone(response);
      },
      logout: (e) => {
        e.preventDefault();
        this.setState({isAuthed: !this.state.isAuthed})
      },
      handleGoogleRespone: response => {
        if(!response.error){
          authenticate(response).then(isAuthenticated => {
            this.setState({ isAuthed: isAuthenticated})
          })
        }
      } 
    }
  }

  componentDidMount() { // Checks for auth when the page loads
    authenticate().then(isAuthenticated => {
      this.setState({ isAuthed: isAuthenticated })
    })
  }

  render() {
    return (
      <div className = "App">
        { !this.state.isAuthed ? (
          <div className="Login-Modal-Container">
            <video className="Login-Vid" autoPlay loop mute="true">
              <source src={LoginVid}></source>
            </video>
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
                    clientId={PROD}
                    buttonText="Continue with Google"
                    onSuccess={this.state.responseGoogle}
                    onFailure={this.state.responseGoogle}
                  />
                </div>
              </div>
          </div>
        ) : ( 
            <Router>
              <NavBar logout={this.state.logout} />
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

/**
 * LINK TO AUTHENTICATION HELP
 * https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-login-and-authentication
 */
export const getAccessToken = () => Cookies.get('access_token_autog');
export const isAuthenticated = () => !!getAccessToken();
export const authenticate = async (response) => {
  console.log(getAccessToken());
  if (typeof getAccessToken() !== 'undefined') { return true; }
  return false;
}