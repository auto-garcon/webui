import React, { Component } from 'react';
/* This component is the last page of the update account information form. This page just informs the user that
the account information added was successfully updated.
*/ 

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { MDBCloseIcon } from "mdbreact";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2b2d42", contrastText: "#fff" },
    secondary: { main: "#03a9f4", contrastText: "#fff" }
  }
});

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
    storeManagerFlag();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider theme ={theme}>
        <React.Fragment>
        <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Success" color ="#2B2D42"/>
            <h1>Profile Successfully Updated!</h1>
            <Link to="/settings">
              <MDBCloseIcon style={{
                color: "primary",
                position: 'absolute',
                right: 5,
                top: 5,
                
              }}/>
            </Link>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
/** Trying to store some cookies about the manager so that managers logging in again don't have to logout and then log back in just to get authenticated. */
export const storeManagerFlag = () => Cookies.set('is_manager', true)