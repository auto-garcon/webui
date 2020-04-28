/*This component holds a form that updates the account with restaurant information. 
it handles input fields such as the restaurant name, address and the number of tables it has
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
    secondary: { main: "#457bd9", contrastText: "#fff" }
  }
});
export class RestaurantInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            <AppBar title="Enter Personal Details" />
            <Typography variant="h6" color="primary" gutterBottom>
                Update Profile- Restaurant Information
            </Typography>
            <TextField
              placeholder="Enter Your Restaurant's Name"
              label="Restaurant Name"
              onChange={handleChange('restaurantName')}
              defaultValue={values.restaurantName}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter A Description of the Restaurant"
              label="Restaurant Description"
              onChange={handleChange('description')}
              defaultValue={values.description}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter the Restaurant Address"
              label="Restaurant Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter the City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter the Zipcode"
              label="Zipcode"
              onChange={handleChange('zipcode')}
              defaultValue={values.zipcode}
              margin="normal"
							fullWidth="true"
            />
             <br />
            <TextField
              placeholder="Enter the State"
              label="State"
              onChange={handleChange('state')}
              defaultValue={values.state}
              margin="normal"
							fullWidth="true"
            />
              <br />
            <TextField
              placeholder="Enter the Country"
              label="Country"
              onChange={handleChange('country')}
              defaultValue={values.country}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter the Number of Tables "
              label="Number of Tables"
              onChange={handleChange('numTables')}
              defaultValue={values.numTables}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <Button
              color="#EDF2F4"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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

export default RestaurantInfo;