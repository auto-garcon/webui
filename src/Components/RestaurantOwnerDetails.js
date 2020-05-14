/*This component holds a form that updates the account with restaurant owner information. 
it handles input fields such as the the owners first and last name, email, and address.
*/
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { MDBCloseIcon } from "mdbreact";
import { Link } from 'react-router-dom';


const theme = createMuiTheme({
    palette: {
      primary: { main: "#2b2d42", contrastText: "#fff" },
      secondary: { main: "#03a9f4", contrastText: "#fff" }
    }
  });
  const CloseIconPage = () => {
    return (
      <MDBCloseIcon />
    );
  }
export class RestaurantOwnerDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme ={theme}>
        <React.Fragment>
          <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
            >
            <AppBar title="Enter User Details" />
            <Typography variant="h6" color="primary" gutterBottom noWrap>
                Update Profile- Restaurant Owner Information
            </Typography>
         
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
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

export default  RestaurantOwnerDetails ;