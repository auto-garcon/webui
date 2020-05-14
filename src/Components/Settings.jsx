/*This component is for the settings. this provides all of the routing for the three settings pages
which are QR generation, account information and display page.
*/
import React from 'react';
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


export default function Settings(props) {
  const { restid, tables } = props;
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
            restid = {restid}
            tables = {tables}
          />
        </Route>
        <Route path ='/settings/display'>
          <Display/>
        </Route>
        <Route path ='/settings/userform'>
          <UserForm/>
        </Route>
       </Switch>
       <StickyFooter />
      </Router>
      </>
    )
  }
