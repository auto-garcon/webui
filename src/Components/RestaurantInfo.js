
import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
function restaurantInfo(props){
  const{
    restaurantName,
    restaurantAddress,
    city,
    state,
    zip, 
    country
  } = props
  return (
    <div>
      <input type="string" className= "input" value={restaurantName ? restaurantName: ""} onChange={onChangerestaurantName}/>
      <input type="string" className= "input" value={restaurantAddress? restaurantAddress: ""} onChange={onChangerestaurantAddress}/>
      <input type="string" className= "input" value={city? city: ""} onChange={onChangecity}/>
      <input type="string" className= "input" value={state?  state: ""} onChange={onChangestate}/>
      <input type="string" className= "input" value={zip? zip: ""} onChange={onChangezip}/>
      <input type="string" className= "input" value={country? city: ""} onChange={onChangecity}/>
    </div>
  )
}
export default function RestaurantInfoForm() {
  const [ restaurantName, restaurantAddress, city, state, zip, country] = useState([]);
  
  return ( 
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Restaurant Information 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="restaurantName"
            name="restaurantName"
            label="Restaurant Name"
            fullWidth
          />
        </Grid>
      {/*}  <Grid item xs={12}> This is not in API 
          <TextField
            required
            id="restaurantPhone"
            name="restaurantPhone"
            label="Restaurant Phone Number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="restaurantEmail"
            name="restaurantEmail"
            label="Restaurant Email"
            fullWidth
          />
  </Grid>*/}
        <Grid item xs={12}>
          <TextField
            required
            id="restaurantAddress"
            name="restaurant Address"
            label="Restaurant Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
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

      </Grid>
    </React.Fragment> 
  );
}