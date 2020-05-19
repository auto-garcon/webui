import React, { useEffect, useState } from 'react';
import './CSS/TicketContainer.css';
import TicketList from './TicketList';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useGoogleLogin} from "react-google-login";

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
export default function TicketContainer() {
  const [curTickets, setCurTickets] = useState([]);
  const [activeTickets, setActiveTickets] = useState([1,2,3,4,5]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [serviceTickets, setServiceTickets] = useState([1,2]);
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const proxy_url = "https://fierce-tundra-17132.herokuapp.com/";

  useEffect( () => {
    // // This is a useeffect that will pull all the tickets from the API/DB once the page loads/mounts
    // fetch(proxy_url + "https://autogarcon.live/api/restaurant/5/order", {
    //   method: 'GET',
    //   mode: "cors",
    //   headers: {
    //     'Accept': '*/*',
    //     'Access-Control-Allow-Origin' : '*',
    //   }
    // }).then(res => res.json())
    //   .then(data => setCurTickets(curTickets => [...curTickets, data]))
    //   .catch(err => console.log(err));
}, );


  const resolveActiveTicket = (event, index) => {
      console.log(event.target.name)
      //setActiveTickets(activeTickets.filter(event => event !== ticket))
      //setResolvedTickets(resolvedTickets.filter(e=> e !== ticket))
  }

  const resolveServiceTicket = (event, ticket) => {
    setResolvedTickets(resolvedTickets => [...resolvedTickets,1])
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className={classes.root}>
        <AppBar position="sticky" style={{ background: "#8d99ae"}}>
          <Tabs value={value} onChange={handleChange}  centered indicatorColor="primary" >
            <Tab label="Active" />
            <Tab label="Resolved" />
            <Tab label="Service"/>
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <TicketList tickets={activeTickets} onResolve={resolveActiveTicket}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TicketList tickets={resolvedTickets} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TicketList tickets={serviceTickets} onResolve={resolveServiceTicket}/>
        </TabPanel>
      </div>
  );
}

