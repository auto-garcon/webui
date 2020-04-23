/* This is the standard nav bar component seen from all pages besides the login. From this page, the main logo is shown and the user can click
on the logo at any point to return to the dash board. The nav bar also has the settings icon where the user can click on the avatar
and be directed to the settings page. 
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import logo from './logo.jpeg';
import { Link } from 'react-router-dom';

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
          <Link to="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
          <Typography variant="h6" className={classes.title} style={{ color: '#2b2d42' }}>
            
          </Typography>
          {auth && (
            <div>
              <Link to="/settings">
                <IconButton
                  style={{ background: '#edf2f4' }}
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                <AccountCircle style={{backgroundColor: '#edf2f4', color: '2b2d42'}}/>
                </IconButton >
              </Link>
              
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