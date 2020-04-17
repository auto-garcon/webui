import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import QR from './QR';
import Account from './AccountInfo';
import Display from './Display';
import StickyFooter from './StickyFooter';
import SettingsNav from './SettingsNav';

export default function Settings() {
    return (
      <>
      <SettingsNav/>
      <Router>
          <div>
            <ul>
              <li>
                <Link to="/qr">QR Code Generation</Link>
              </li>
              <li>
                <Link to="/account">Account Information</Link>
              </li>
              <li>
                <Link to="/display">Display</Link>
              </li>
  
            </ul>
          </div>
      
       <Switch> 
        <Route path ='/qr' exact>
          <QR />
        </Route>
        <Route path ='/account'>
          <Account />
        </Route>
        <Route path ='/display'>
          <Display/>
        </Route>
        
       </Switch>
       <StickyFooter />
      </Router>
      </>
    )
  }