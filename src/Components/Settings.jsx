/*This component is for the settings. this provides all of the routing for the three settings pages
which are QR generation, account information and display page.
*/
import React, { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import QR from './QR';
import Display from './Display';
import StickyFooter from './StickyFooter';
import SettingsNav from './SettingsNav';
import UserForm from './UserForm';
import Typography from '@material-ui/core/Typography';

//add get request 

export default function Settings(props) {
  const {user, tables} = props;
  const [restaurant, setRestaurant] = useState({});
  
  useEffect (() => {
   console.log(user);

   if(user.restaurantID){
      
      const proxy_url = "https://fierce-tundra-17132.herokuapp.com/";
      fetch(proxy_url+'https://autogarcon.live/api/restaurant/'+user.restaurantID, {
          method:"GET",
          mode: 'cors',
          headers: {
          'Accept': '*/*',
          'Access-Control-Allow-Origin' : '*',
          },
        })
        .then(res => res.json().then(data => {setRestaurant(data)}))
        .catch(err =>console.log(err));
    
      }
    
  }, [])
    return (
      <>
      
      <Router>
          <SettingsNav/>
          <div>
            <ul>
            <li>
                
                <Link style= {{color: "#edf2f4"}}to="/settings/userform">Account Information</Link>
              </li>
              <li>
                <Link style= {{color: "#edf2f4"}}to="/settings/qr">QR Code Generation</Link>
              </li>
            </ul>
          </div>
    
       <Switch>
        <Route path ='/settings/qr' exact>
          <QR
            user={user}
            tables={tables}
          />
        </Route>
        <Route path ='/settings/display'>
          <Display user={user}/>
        </Route>
        <Route path ='/settings/userform'>
          <UserForm user={user} restaurant = {restaurant}/>
          
        </Route>
       </Switch>
       <StickyFooter />
      </Router>
      </>
    )
  }
