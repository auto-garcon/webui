import React from 'react';
import GoogleLogin from 'react-google-login'
import Landing from './Landing'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const DEV = "1020443801830-kjm2qo4ujk27smhn9n7l7j33ojlaecpt.apps.googleusercontent.com"
const PROD = "1020443801830-prp10hjgd1r8pc6pue3br9mkjphn1qic.apps.googleusercontent.com"
const PRODAPI = "https://autogarcon.live/api/users/newuser"
const DEVAPI = "http://localhost/api/users/newuser"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        AUTO-GARÇON
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function responseGoogle(response) {
  //console.log(response);
  fetch(DEVAPI, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    },
    body: JSON.stringify(response)
  })
  .then(res => console.log(res))
  .then(data => console.log(data))
  .catch(err => console.log("FAILED", err));
}

export default function SignInSide() {
  

  return (
   <>
      <CssBaseline />
      
    </>
  );
}