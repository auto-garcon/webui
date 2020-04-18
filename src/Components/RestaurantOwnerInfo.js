import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
const DEVAPI = "http://localhost/api/users/newuser"

//Fetch from DB if restaurant owner info already there
function restaurantOwnerInfo(props){
  const{
    firstName,
    lastName,
    email
  } = props
  return (
    <div>
      <input type="string" className= "input" value={firstName ? firstName: ""} onChange={onChangefirstName}/>
      <input type="string" className= "input" value={lastName ? lastName: ""} onChange={onChangelastName}/>
      <input type="string" className= "input" value={email? email: ""} onChange={onChangeemail}/>
    </div>
  )
}
export default function RestaurantOwnerInfoForm() {
  const [firstName, lastName, email] = useState([]);

  fetch(DEVAPI, {

    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    },
    body: JSON.stringify({firstName:firstName},{lastName:lastName},{email:email})
  })
  .then(res => console.log(res))
  .then(data => console.log(data))
  .catch(err => console.log("FAILED", err));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Owner Information 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
          />
        </Grid>
       {/*<!-- <Grid item xs={12}> not in API 
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
  
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
          /> 
        </Grid> -->
  */}
      </Grid>
    </React.Fragment>
  );
}