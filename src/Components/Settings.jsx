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

export default function Settings(props) {
  const { restid, tables } = props;
    return (
      <>
      <SettingsNav/>
      <Router>
          <div>
            <ul>
              <li>
                <Link to="/settings/qr">QR Code Generation</Link>
              </li>
              <li>
                <Link to="/settings/account">Account Information</Link>
              </li>
              <li>
                <Link to="/settings/display">Display</Link>
              </li>
            </ul>
          </div>
      
       <Switch> 
        <Route path ='/settings/qr' exact>
          <QR 
            restid = {restid}
            tables = {tables}
          />
        </Route>
        <Route path ='/settings/account'>
          <Account />
        </Route>
        <Route path ='/settings/display'>
          <Display/>
        </Route>
        
       </Switch>
       <StickyFooter />
      </Router>
      </>
    )
  }