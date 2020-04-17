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
      user: LocalStorage.get('user'),
      responseGoogle: (response) => {
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
        if(response) {
          this.setState({user: response});
          LocalStorage.set('user', response);
        }
      }
    }
  }
  // const [ loggedIn, setLoggedIn ] = useState(false);
  // const [user, setUser] = useState(null);
 
  // useEffect(() => {
  //   if(LocalStorage.get('user') != null){
  //     setUser(LocalStorage.get('user'));
  //   }
  // },[]);
  componentDidMount() {
    /**
     * IF LOGGED IN
     * 
     * - START LOADING ANIMATION
     * - FETCH(API) FOR USER INFORMATION
     * - LOAD DASHBOARD
     * 
     * OTHERWISE
     * 
     * - SEND TO LOGIN SCREEN 
     */
    if(this.state.user != null){
      //ANIMATION
      //FETCH(API)
    }
  }

  render() {
    return (
      <div className = "App">
        { this.state.user == null ? (
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
              <Route exact={true} path="/" component={Dashboard}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/settings" component={Settings}></Route>
              <Route path="/createmenu" component={CreateMenu}></Route>
              <Footer />
            </Router>
        )}
      </div>
      // <>
      // <BrowserRouter>
      //   <Switch>
      //       <Route exact path='/'>
      //       {!loggedIn?
      //       <>
        
      //             <div className="Landing-Background">
      //               <div className="Login-Modal">
      //                 <div className="Login-Header"> 
      //                   <header className="App-header">
      //                     <img src={LogoLarge} className="App-logo" alt="logo" />
      //                     <h1>AUTO-GARCON</h1>
      //                   </header>
      //                   </div>
      //                   <div className="Login-Container">
      //                     <LockOutlinedIcon color="inherit" />
      //                     <br></br>
      //                     <GoogleLogin
      //                       clientId={DEV} //CLIENTID NOT CREATED YET
      //                       buttonText="Continue with Google"
      //                       onSuccess={responseGoogle}
      //                       onFailure={responseGoogle}
      //                     />
      //                 </div>
      //               </div>
      //             </div>
      //             <Typography variant="body2" color="textSecondary" className="Footer">
      //               {'Copyright © '}
      //               <Link color="inherit" href="https://material-ui.com/" >
      //                 AUTO-GARÇON
      //               </Link>{' '}
      //               {new Date().getFullYear()}
      //               {'.'}
      //               <a href={"/contact"}>Contact us</a>
      //               <a href={"/about"}>About</a>
                    
      //             </Typography>
      //           </>
      //           :
      //           <> 
      //             <NavBar />
                  
      //               <Dashboard />
      //             <Typography variant="body2" color="textSecondary" className="Footer">
      //               {'Copyright © '}
      //               <Link color="inherit" href="https://material-ui.com/">
      //                 AUTO-GARÇON
      //               </Link>{' '}
      //               {new Date().getFullYear()}
      //               {'.'}
      //               <ul>
      //                 <li>
      //                   <Link to="/about" className="Link" >
      //                     About
      //                   </Link>
      //                 </li>
      //                 <li>
      //                   <Link to="/contact" className="Link">
      //                     Contact Us
      //                   </Link>
      //                 </li>
      //               </ul>
      //             </Typography>
                  
      //               <Switch>
      //                 <Route path ='/about'>
      //                   <About />
      //                 </Route>
      //                 <Route path ='/contact'>
      //                   <Contact />
      //                 </Route>
      //               </Switch>
                  
      //           </>
      //         }
      //       </Route>
      //       <Route path ='/about'>
      //         <About />
      //       </Route>
      //       <Route path ='/contact'>
      //         <Contact />
      //       </Route>
      //       <Route path ='/Settings'>
      //         <Settings />
      //       </Route>
      //       <Route>
      //         <CreateMenu />
      //       </Route>
      //       <Route path ='/dashboard'>
      //           <NavBar />
      //             <Dashboard />
      //           <Typography variant="body2" color="textSecondary" className="Footer">
      //             {'Copyright © '}
      //             <Link color="inherit" href="https://material-ui.com/">
      //               AUTO-GARÇON
      //             </Link>{' '}
      //             {new Date().getFullYear()}
      //             {'.'}
      //             <ul>
      //               <li>
      //                 <Link to="/about" className="Link" >
      //                   About
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link to="/contact" className="Link">
      //                   Contact Us
      //                 </Link>
      //               </li>
      //             </ul>
      //           </Typography>
      //       </Route>
      //     </Switch>
      //   </BrowserRouter>
  
  
      // </> 
    )
  } 
}

// const StickyFoote = () => {
//   return (
//     <div className="Footer">
//       <nav>
//         <ul>
//           <li>
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//               AUTO-GARÇON
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//           </li>
//           <li>
//             <Link color="inherit" to="/about">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link color="inherit" to="/contact">
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }