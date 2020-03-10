import React from 'react';
import TextField from '@material-ui/core/TextField';

function SignUpUserForm() {
  return (
  
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />


  );
  
}
export default SignUpUserForm;