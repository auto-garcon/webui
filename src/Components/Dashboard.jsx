import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  links: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const preventDefault = event => event.preventDefault();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <AppBar position="sticky" style={{ background: "#2b2d42"}}>
            <Toolbar>
                <Typography variant="h6"  className={classes.links} color="inherit" aria-label="menu">
                    <Link href="#" onClick={preventDefault} color="inherit">
                        About
                    </Link>
                    <Link href="#" onClick={preventDefault}  color="inherit" >
                        Contact Us
                    </Link>
                </Typography>
            </Toolbar>
         </AppBar>
      <AppBar position="sticky" style={{ background: "#8d99ae"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Tickets" {...a11yProps(0)} />
          <Tab label="Menu" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h1>TICKETS VIEW UNDER CONSTRUCTION</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>MENU VIEW UNDER CONSTRUCTION</h1>
      </TabPanel>
    </div>
  );
}
