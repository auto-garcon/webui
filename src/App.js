/* This is the main app js component. this is where we have all components
that are featured on every page stored. this includes login and logout functionality,
routing and sign in authentication.
 */
import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import NavBar from './Components/NavBar';
import GoogleLogin from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LogoLarge from './Components/Images/AutoGarcon-Logo-Large.png';
import Settings from './Components/Settings';
import Footer from './Components/StickyFooter'
import CreateMenu from './Components/CreateMenu';
import EditMenu from './Components/EditMenu';
import Loader from './Components/Loader';
import LoginVid from './Components/Images/Login-VID.mp4';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';


/** Test Google login keys and API links */
const DEV = "1020443801830-kjm2qo4ujk27smhn9n7l7j33ojlaecpt.apps.googleusercontent.com"
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
      isManager: false,
      user: {},
      tables: 0,
      proxy_url: "https://fierce-tundra-17132.herokuapp.com/",
      responseGoogle: (response, e) => {
        const expires = ( 60 * 60) * 1000
        const inOneHour = new Date(new Date().getTime() + expires)
        Cookies.set('access_token_autog', response.tokenObj.access_token, { expires: inOneHour });
        this.state.handleGoogleRespone(response);
      },
      logout: (e) => {
        e.preventDefault();
        this.setState({isAuthed: false});
        Cookies.set('access_token_autog', undefined);
      },
      handleGoogleRespone: response => {
        if(!response.error){
          authenticate(response).then(isAuthenticated => {
            this.setState({ isAuthed: isAuthenticated});
          })
          let firstName = response.profileObj.givenName
          let lastName = response.profileObj.familyName
          let email = response.profileObj.email
          
          this.state.signin({
            firstName: firstName,
            lastName: lastName,
            email: email
          })
        }
      },
      signin: (response) => {
        fetch(this.state.proxy_url+"https://autogarcon.live/api/users/signin",{
          method: "POST",
          mode: "cors",
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: "John",
            lastName: "Smith",
            email: "john.smith@internet.web"
          })
        })
        .then(res => {
          res.json().then(data => this.state.updateUser({
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              userID: data.userID,
              restaurantID: data.restaurantID
          }))

          fetch(this.state.proxy_url+`https://autogarcon.live/api/restaurant/38/tables`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Accept": "*/*"
            }
          })
          .then(res => {
            res.json().then(data => {
              let tables = data.numTables
              this.state.updateTables(tables)
            })
          })
          .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
      },
      updateUser: (user) => {
        if(user.restaurantID) {
          this.setState({user: user})
          console.log(this.state.user.restaurantID)
          this.state.updateManager(user)
        }
      },
      updateManager: (user) => {
        if(user.restaurantID) {
          this.setState({isManager: true})
          Cookies.set('is_manager', true);
          this.setState({isManager: !!Cookies.get('is_manager')})
          return true
        }
      },
      updateTables: (tables) => {
        if(tables >= 0) {
          this.setState({tables: tables})
          return true
        }
        console.log("TABLES",this.state.tables)
        return false
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
        { !this.state.isAuthed  ? (
        <>
          <Router>
            <Redirect to={{pathname: "/"}}/>
          </Router>
          <section className="Login-Container-Wrapper">
            <div className="video-container">
              <video src={LoginVid} autoPlay={true} muted={true} loop={true}/>
            </div>
            <div className="Login-Modal-Container">
              <div className={"Login-Modal"}>
                <div className={"Login-Header"}>
                  <header className="App-header">
                     <img src={LogoLarge} className="App-logo" alt="logo" />
                     <h1>AUTO-GARCON</h1>
                   </header>
                </div>
                <div className={"Login-Container"}>
                  <LockOutlinedIcon color="inherit" />
                  <br/>
                  <GoogleLogin
                      buttonText="Continue with Google"
                      onSuccess={this.state.responseGoogle}
                      onFailure={this.state.responseGoogle}
                      clientId={PROD}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
        ) : (
          !!Cookies.get('is_manager') ? (
            <Router>
              <Redirect to={{pathname:"/"}} />
              <NavBar logout={this.state.logout} />
              <Route exact={true} path="/">
                <Dashboard user={this.state.user}/>
              </Route>
              <Route path="/about" component={About}/>
              <Route path="/settings">
                <Settings user={this.state.user} tables={this.state.tables}/>
              </Route>
              <Route path="/createmenu" component={CreateMenu}/>
              <Route path="/editmenu" component={EditMenu}/>
              <Footer />
            </Router>
          ) : (
            <Router>
              <Redirect to={{pathname:"/settings/userform"}} />
              <NavBar logout={this.state.logout}/>
              <Route path="/settings">
                <Settings user={null} tables={0}/>
              </Route>
              <Footer />
            </Router>
          )
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
export const getManagerFlag = () => Cookies.get('is_manager');
export const isAuthenticated = () => !!getAccessToken();
export const authenticate = async (response) => {
  return typeof getAccessToken() !== 'undefined' //&& typeof getManagerFlag() !== 'undefined';
}
