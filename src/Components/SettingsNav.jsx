/*This component is the app bar for the settings page. It is just a bar displayed on the settings page with three links.
one for the account information page, another for qr generation and lastly one for display.
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Settings from './Settings';
import Link from '@material-ui/core/Link';

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

      <AppBar position="static" style={{ background: '#457b9d' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} style={{ color: '#edf2f4' }}>
            <strong>Settings</strong>
          </Typography>
          <Typography variant="h6" className={classes.title} style={{ color: '#2b2d42' }}>
          <Link style={{ color: '#2b2d42' }} href="/settings/userform" >Account Information</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} style={{ color: '#2b2d42' }}>
          <Link style={{ color: '#2b2d42' }} href="/settings/qr" >QR Generation</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} style={{ color: '#2b2d42' }}>
          <Link style={{ color: '#2b2d42' }} href="/settings/display" >Display</Link>
          </Typography>
          {auth && (
            <div>

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
