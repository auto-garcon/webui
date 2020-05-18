

  /*This component holds a form that updates the account with restaurant owner information. 
it handles input fields such as the the owners first and last name, email, and address.
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
import Display from './Display';
import axios from 'axios'
import {ChromePicker} from 'react-color'
//import {primaryColor} from './Display';



const theme = createMuiTheme({
    palette: {
      primary: { main: "#2b2d42", contrastText: "#fff" },
      secondary: { main: "#03a9f4", contrastText: "#fff" }
    }
  });
  const CloseIconPage = () => {
    return (
      <MDBCloseIcon />
    );
  }
export class RestaurantInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  state = {
    selectedFile: null
  }
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  //post request image upload logo
  uploadHandler = () => {
    const fd = new FormData();
    fd.append('uploaded_file',this.state.selectedFile, this.state.selectedFile.name)
    axios.post('https://vast-wildwood-24669.herokuapp.com'+'https://autogarcon.live/api/image/:filename',fd, {
        mode: 'cors',
        headers: {
        enctype : 'multipart/form-data',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",

      }
    }).then(res => {
      console.log(err => console.log(err))
    }).catch(err =>
      console.log(err))
  }
 
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
            <AppBar title="Enter User Details" />
            <Typography variant="h6" color="primary" gutterBottom noWrap>
                <b>Restaurant Display Information</b>
            </Typography>
            <div>
            <b style = {{color: "#2B2d42"}}>Upload Restaurant Logo Image</b>
            <div>
             <input encType = "multipart/form-data" type = "file" onChange = {this.fileChangedHandler}/>
            <button style ={{background: "#edf2f4"}} onClick = {this.uploadHandler} >Upload</button>
            </div>
            </div>
            <br></br>
            <div>
            
            <Display/>

            </div>
            <b style = {{color: "#2B2d42"}}>Enter Colors Selected</b>
     
          <TextField
            placeholder="Primary Color (example: fffff)"
            label="Primary Color"
            onChange={handleChange('primaryColor')}
            defaultValue={values.primaryColor}
            margin="normal"
            fullWidth="true"
            inputProps = {{ 
              maxLength : "30",
            }}
          />
    
   
          <TextField
            placeholder="Secondary Color (example: fffff)"
            label="Secondary Color"
            onChange={handleChange('secondaryColor')}
            defaultValue={values.secondaryColor}
            margin="normal"
            fullWidth="true"
            inputProps = {{ 
              maxLength : "30",
            }}
          />
  
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
              
              <div>
              <Link to="/settings">
            <MDBCloseIcon style={{
              background: "primary",
              position: 'absolute',
              right: 5,
              top: 5,
              
            }}/>
            </Link>
            
            </div>
           
          
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default RestaurantInfo;