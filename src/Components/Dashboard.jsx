import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TicketContainer from './TicketContainer';
import MenuContainer from './MenuContainer';

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <NavBar />
      <AppBar position="sticky" style={{ background: "#8d99ae"}}>
        <Tabs value={value} onChange={handleChange}  centered indicatorColor="primary" >
          <Tab label="Tickets" />
          <Tab label="Menu" />
        </Tabs>
      </AppBar>
      
      <TabPanel value={value}  index={0}>
        <TicketContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MenuContainer />
      </TabPanel>
    </div>
  );
}
