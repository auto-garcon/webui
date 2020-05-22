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


  componentWillMount () {
    this.setState ({
            restaurantName: this.props.restaurant.restaurantName,
            description:    this.props.restaurant.description,
            address:        this.props.restaurant.address,
            city:           this.props.restaurant.city,
            zipcode:        this.props.restaurant.zipcode,
            state:          this.props.restaurant.state,
            country:        this.props.restaurant.country,
            numTables:      this.props.restaurant.numTables  ,
            primaryColor:   this.props.restaurant.primaryColor,
            secondaryColor: this.props.restaurant.secondaryColor
          })
    
    }
  
  render() {
    const { step } = this.state;
    const { restaurantName, description, address, city, zipcode, state, country, numTables, primaryColor, secondaryColor} = this.state;
    const values = {restaurantName, description, address, city, zipcode, state, country, numTables, primaryColor, secondaryColor};

    switch (step) {
      case 1:
        return (
            
          <RestaurantOwnerInfo
            
            user = {this.props.user}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
           
          />
        );
      case 2:
        return (
          <RestaurantInfo
            user = {this.props.user}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            user = {this.props.user}
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