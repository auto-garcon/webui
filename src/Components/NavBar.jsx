import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Settings from './Settings';
import { Button } from '@material-ui/core';
import logo from './logo.jpeg';

import { 
    BrowserRouter as Router,
    Link,
    Route
  } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

  logo: {
    maxWidth: 160,
  },
  root: {
    flexGrow: 1,
    background : '#2E3B55'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    background : '#2E3B55'
  },
  title: {
    flexGrow: 1,
    textcolor: '#2E3B55',
    
    
    
  },
 

}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}  >
 
      <AppBar position="static" style={{ background: '#edf2f4' }}>
        <Toolbar> 
  
        <img src={logo} alt="logo" className={classes.logo} />

          <Typography variant="h6" className={classes.title} style={{ color: '#2b2d42' }}>
            <strong>Auto-Garcon</strong>
          </Typography>
          {auth && (
            <div>
              <IconButton
              style={{ background: '#edf2f4' }}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                  <a href={'./Settings'}>
                <AccountCircle style={{backgroundColor: '#edf2f4', color: '2b2d42'}}/>
                </a>
              </IconButton >
              <Menu
              
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
             
              >
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}