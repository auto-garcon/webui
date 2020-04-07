import React from 'react';
import './Components/CSS/Avatar.css';
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
import SignUp from './Components/AccountInfo'
import Contact from './Components/Contact'
import CreateMenu from './Components/CreateMenu';
import StickyFooter from './Components/StickyFooter';
import LoginGoogle from './Components/login-google';
import Settings from './Components/Settings';
import NavBar from './Components/NavBar';
//import ErrorPage from './Components/Errorpage'

export default function App() {
  return (
    <>
    <NavBar />
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
      <Route path ='/' exact>
        <Landing />
      </Route>
      <Route path ='/login'>
        <Login />
      </Route>
      <Route path ='/home'>
        <Home/>
      </Route>
      <Route path ='/menus'>
        <Menus />
      </Route>
      <Route path ='/dashboard'>
        <Dashboard />
      </Route>
      <Route path ='/addMenu'>
        <AddMenu />
      </Route>
      <Route path ='/about'>
        <About />
      </Route>
      <Route path ='/signup'>
        <SignUp />
      </Route>
      <Route path ='/contact'>
        <Contact />
      </Route>
      <Route path ='/createMenu'>
        <CreateMenu />
      </Route>
      <Route path ='/loginGoogle'>
        <LoginGoogle/>
      </Route>
      <Route path ='/Settings'>
        <Settings/>
      </Route>
     </Switch>
 
     <StickyFooter />
    </Router>
    </>
  )
}