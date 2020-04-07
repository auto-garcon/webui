import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import About from './About';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{justifyContent:"left"}}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        AUTO-GARÇON
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      <Link href="/about" className="dad" style={{justifyContent:"right"}} >
        About
      </Link>
      <Link href="/contact" className="dad" style={{textAlign:"right"}}>
        Contact Us
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2, 2),
    position: 'fixed',
    width: '100%',
    bottom: '0',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}