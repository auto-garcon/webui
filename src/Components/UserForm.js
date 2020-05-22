/* This is the parent component for updating the accound information. this contains the module design where there is a 
multistep form process to fill out the information.
*/
import React, { Component } from 'react';
import RestaurantInfo from './RestaurantInfo';
import RestaurantOwnerInfo from './RestaurantOwnerDetails';
import Confirm from './Confirm';
import Success from './Success';
import AppBar from '@material-ui/core/AppBar';


export class UserForm extends Component {

  state = {
    step: 1,
    restaurantName: '',
    description: '',
    address: '',
    city:'',
    zipcode: '',
    state: '',
    country:'',
    numTables: '',
    primaryColor: '',
    secondaryColor: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  /*constructor(props){
    super(props)
    this.state = {
      restid: this.props.user.restid,
      //email: this.props.user.email,
     
    }
  }*/
  //Check to see if the user restaurant id tied with the user id 
  isRestaurantAdded = () => {
    const proxy_url = "https://fierce-tundra-17132.herokuapp.com/";
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
        //if(res.restaurants[i].restaurantID == this.props.user.restID){
          this.setState({
            restaurantName: res.restaurants[16].restaurantName,
            description:    res.restaurants[16].description,
            address:        res.restaurants[16].address,
            city:           res.restaurants[16].city ,
            zipcode:        res.restaurants[16].zipCode,
            state:          res.restaurants[16].state,
            country:        res.restaurants[16].country,
            numTables:      res.restaurants[16].numTables  ,
            primaryColor:   res.restaurants[16].primaryColor,
            secondaryColor: res.restaurants[16].secondaryColor
          })
        }
     })
      .then(data => console.log(data))
      .catch(err => console.log("FAILED", err));
    
  }
  
  render() {
    const { step } = this.state;
    const { restaurantName, description, address, city, zipcode, state, country, numTables, primaryColor, secondaryColor} = this.state;
    const values = {restaurantName, description, address, city, zipcode, state, country, numTables, primaryColor, secondaryColor};

    switch (step) {
      case 1:
        return (
            
          <RestaurantOwnerInfo
            onClick = {this.isRestaurantAdded}
    
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
           
          />
        );
      case 2:
        return (
          <RestaurantInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;