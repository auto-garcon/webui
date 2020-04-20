import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import RestaurantOwnerInfo from './RestaurantOwnerInfo';
import RestaurantInfo from './RestaurantInfo';
import Review from './Review';

import './CSS/SignUp.css';

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
function Copyright() {
  return (
    <Typography variant="body2" color="#edf2f4" align="center">
      {'Copyright © '}
      <Link color="#edf2f4" href="https://material-ui.com/">
        Auto-Garcon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
 
  appBar: {
    backgroundColor: "#2b2d52",
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

  },
  paper: {
    backgroundColor: "#edf2f4",
    Typography: {
      color: "#2b2d52",
    },
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    iconColor: "#2b2d52",
    hoveredIconColor: "#2b2d52",
    inactiveIconColor: "#2b2d52",
    backgroundColor: "#edf2f4",
   
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#2b2d52",
    color:"#FFFFFF",
   

  },
}));

const steps = ['Restauraunt Owner Info', 'Restaurant Info'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RestaurantOwnerInfo />;
    case 1:
      return <RestaurantInfo />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
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
  const [firstName, lastName, email] = useState([]);
  const [ restaurantName, restaurantAddress, city, state, zip, country] = useState([]);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="#edf2f4" noWrap>
            Auto-Garcon
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Update Your Profile
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for for updating your profile.
                </Typography>
                <Typography variant="subtitle1">
                  Click dashboard to return to menus and view active tickets.
                  <br></br><a href={'/dashboard'}><button>Dashboard</button></a>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color= "#edf2f4"
                    onClick={handleNext}
                    className={classes.button}
                    
                  >
                    {activeStep === steps.length - 1 ? 'Update' : 'Next'}
                    
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}