/*This is a component that is part of updating a user's account information. This the review page 
where a user can see all of their inputs for the fields and either choose to go back a page or hit 
submit and contine. Upon confirming, this will send the data to the back end. */

import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { MDBCloseIcon } from "mdbreact";
import { Link } from 'react-router-dom';
import Popup from './Popup';
import Cookies from 'js-cookie';
import Settings from './Settings';


const theme = createMuiTheme({
    palette: {
      primary: { main: "#2b2d42", contrastText: "#fff" },
      secondary: { main: "#03a9f4", contrastText: "#fff" }
    }
  });
export class Confirm extends Component {
  continue = e => {
  //  e.preventDefault();
    // PROCESS FORM //
    //console.log(this.props.user.email)
    
    this.props.nextStep();
   // storeManagerCookie();
  };
  
  constructor(props){
    super(props)
    this.state = {
      restid: null,
      //email: this.props.user.email,
     
    }
  }
  submit = e => {
    e.preventDefault();
    const proxy_url = "https://fierce-tundra-17132.herokuapp.com/";
    //add a restaurant 
    fetch ('https://autogarcon.live/api/restaurant/add', {
      method:"POST",
      mode: 'no-cors',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        restaurantName : this.props.values.restaurantName,
        description : this.props.values.description,
        address : this.props.values.address,
        city : this.props.values.city,
        zipCode : this.props.values.zipcode,
        state : this.props.values.state,
        country : this.props.values.country,
        numTables : this.props.values.numTables,
        primaryColor : this.props.values.primaryColor,
        secondaryColor : this.props.values.secondaryColor
      })
    })
     .then(res => console.log(res))
     .then(data => console.log(data))
      .catch(err => console.log("FAILED", err));

      //get restaurant 
      fetch(proxy_url+'https://autogarcon.live/api/restaurant', {
        method:"GET",
        mode: 'cors',
        headers: {
        'Accept': '*/*',
        'Access-Control-Allow-Origin' : '*',
        },
      })
      .then(res => console.log(res))
      .then(res => {
        
       for (var i =0; i<res.restaurants.length(); i++){
        if(res.restaurants[i].restaurantName == this.props.values.restaurantName){
          this.props.restid = res.restuarants[i].restaurantID;
        } 
        console.log(this.props.restID)
      }
     })
      .then(data => console.log(data))
      .catch(err => console.log("FAILED", err));
 
      //add manager
    /*fetch ('https://autogarcon.live/api/users/addmanager', {
      method:"POST",
      mode: 'no-cors',
      headers: {
        'Accept': '*//*',
    //    'Content-Type': 'application/json',
    //  },
    //  body: JSON.stringify({
    //    restaurantID : 39,
    //    email : 'summer@fizzu.com',
    //  })
    // })
    // .then(res => console.log(res))
    // .then(data => console.log(data))
    // .catch(err => console.log("FAILED", err));
    //  console.log("hi");
        this.continue();*/
  }

      //find 
      
    //})

 // .then(data => console.log(data))
 // .catch(err => console.log("FAILED", err));
  /*getRestaurant = e =>{

      //Get restaurants
      fetch('https://autogarcon.live/api/restaurant/add'), {
      method:"GET",
      mode: 'no-cors',
      headers: {
      'Accept': '*///*',
  /*    'Content-Type': 'application/json',
      },
    }
    .then(res =>  console.log(res))
    .then(data => console.log(data))
    .catch(err => console.log("FAILED",err));*/
  //}

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  replace = () =>{
    if (this.props.values.primaryColor.includes("#")){
      this.props.values.primaryColor.replace("#","");
    }
  }

  render() {
    const {
      values: { restaurantName, description, address, city, zipcode, state, country, numTables, primaryColor, secondaryColor,}
    } = this.props;

    return (
      <MuiThemeProvider theme ={theme}>
        <React.Fragment>
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
          <AppBar title="Confirm User Data" />
          <Typography variant="h6" color="primary" gutterBottom>
                Update Profile- Review Account Information
            </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Restaurant Name" secondary={restaurantName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Restaurant Description" secondary={description} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Restaurant Address" secondary={address} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Zipcode" secondary={zipcode} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="State" secondary={state} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Country" secondary={country} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Number of Tables" secondary={numTables} /> 
           </ListItem>
           <ListItem>
              <ListItemText primary="Primary Color" secondary={primaryColor} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Secondary Color" secondary={secondaryColor} /> 
            </ListItem>
          </List>
          <br />
        
          <Button
            color="#2B2D42"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick= {this.submit}
            
            
          >Submit & continue</Button>
           <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}
          >
  
          </div>
            <Link to="/settings">
            <MDBCloseIcon style={{
              background: "primary",
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

export default Confirm;
/** Trying to store some cookies about the manager so that managers logging in again don't have to logout and then log back in just to get authenticated. */
/*export const storeManagerCookie = () => {
  Cookies.set('is_manager', true)
  window.location.reload(false)
}*/