import React from 'react';
//import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Landing from './Components/Landing'
import Login from './Components/Login'
import Home from './Components/Home'
import Menus from './Components/Menus'
import Dashboard from './Components/Dashboard'
import AddMenu from './Components/AddMenu'
//import SignUp from './Components/SignUp'
import About from './Components/About'
import SignUp from './Components/SignUp'
import Contact from './Components/Contact'
import CreateMenu from './Components/CreateMenu';
import StickyFooter from './Components/StickyFooter';
import LoginGoogle from './Components/login-google';

//import ErrorPage from './Components/Errorpage'

export default function App() {
  return (
    <>
    <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/loginGoogle">Login</Link>
            </li>
          </ul>

          <hr />
        </div>
    
     <Switch> 
      <Route path ='/' component={Landing} exact />
      <Route path ='/login' component={Login} />
      <Route path ='/home' component={Home} />
      <Route path ='/menus' component={Menus} />
      <Route path ='/dashboard' component={Dashboard} />
      <Route path ='/addMenu' component={AddMenu} />
      <Route path ='/about' component={About} />
      <Route path ='/signup' component={SignUp} />
      <Route path ='/contact' component={Contact} />
      <Route path ='/createMenu' component={CreateMenu} />
      <Route path ='/loginGoogle'>
        <LoginGoogle/>
      </Route>
     </Switch>
    </Router>
    </>
  )
}