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
    firstName: '',
    lastName: '',
    email: '',
    restaurantName: '',
    description: '',
    address: '',
    city:'',
    zipcode: '',
    state: '',
    country:'',
    numTables: ''
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

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, restaurantName, description, address, city, zipcode, state, country, numTables} = this.state;
    const values = { firstName, lastName, email, restaurantName, description, address, city, zipcode, state, country, numTables };

    switch (step) {
      case 1:
        return (
            
          <RestaurantOwnerInfo
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