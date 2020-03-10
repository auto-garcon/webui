import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
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
//import ErrorPage from './Components/Errorpage'

export default function App() {
  return (
    <Router>
     <Switch> 
      <Route path ='/' component={Landing} exact />
      <Route path ='/login' component={Login} />
      <Route path ='/home' component={Home} />
      <Route path ='/menus' component={Menus} />
      <Route path ='/dashboard' component={Dashboard} />
      <Route path ='/addMenu' component={AddMenu} />
      <Route path ='/about' component={About} />
      <Route path ='/signup' component={SignUp} />
     </Switch>
    </Router>
  )
}