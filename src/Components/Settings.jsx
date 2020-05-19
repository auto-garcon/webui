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

export default function Settings(props) {
  const {user, tables} = props;
    return (
      <>

      <Router>
          <SettingsNav/>
        {/*}  <div>
            <ul>
            <li>
                <Link to="/settings/userform">Account Information</Link>
              </li>
              <li>
                <Link to="/settings/qr">QR Code Generation</Link>
              </li>

              <li>
                <Link to="/settings/display">Display</Link>
              </li>
            </ul>
          </div>
    */}
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
          <UserForm user={user}/>
        </Route>
       </Switch>
       <StickyFooter />
      </Router>
      </>
    )
  }
