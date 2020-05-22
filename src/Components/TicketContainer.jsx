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
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'


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

export default class TicketContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curTickets: [],
      activeTickets: [],
      resolvedTickets: [],
      serviceTickets: [],
      value: 0,
      user: this.props.user,
      proxy_url: "https://fierce-tundra-17132.herokuapp.com/",
      //classes: useStyles()
    }
    this.resolveActiveTicket = this.resolveActiveTicket.bind(this)
  }

  pullTickets() {
    fetch(this.state.proxy_url + `https://autogarcon.live/api/restaurant/38/order`, {
      method: 'GET',
      mode: "cors",
      headers: {
        'Accept': '*/*',
        'Access-Control-Allow-Origin' : '*',
      }
    }).then(res => res.json().then(data => {
      this.setState({
        curTickets: [],
        activeTickets: [],
        resolvedTickets: [],
        serviceTickets: []
      })
      console.log(data)
      data.map((ticket, index) => {
        this.state.curTickets.push(ticket)
      })
      this.state.curTickets.map((ticket, index) => {
        if(ticket.orderStatus == "OPEN") {
          this.state.activeTickets.push(ticket)
        } else {
          this.state.resolvedTickets.push(ticket)
        }
      })
    }).catch(err => console.error(err)))
      .catch(err => console.log(err));
  }

  resolveActiveTicket (index) {
      this.setState(prevState => ({activeTickets: prevState.activeTickets.filter(ticket => {
        if(ticket.orderID !== index.orderID){
          return ticket;
        }
      })})
      )
      let orderID = index.orderID
      fetch(this.state.proxy_url+ `https://autogarcon.live/api/restaurant/38/order/${orderID}/complete`, {
        method: 'POST',
        mode: "cors",
        headers: {
          'Accept': '*/*',
          'Access-Control-Allow-Origin' : '*',
        }
      })
  }

  resolveServiceTicket = (event, ticket) => {
    //setResolvedTickets(resolvedTickets => [...resolvedTickets,1])
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  };

  onRefresh = () => {
    this.pullTickets()
  }

  componentWillMount() {
    this.pullTickets()
  }

  render() {
    return (
      <div >
        <AppBar position="sticky" style={{ background: "#8d99ae"}}>
          <Tabs value={this.state.value} onChange={this.handleChange}  centered indicatorColor="primary" >
            <Tab label="Active" />
            <Tab label="Resolved" />
            <Tab label="Service"/>
          </Tabs>
        </AppBar>
        <Button fullWidth className="Resolve-Button"
					variant="contained" color="primary" onClick={this.onRefresh}>
						Refresh
					</Button>
        

        <TabPanel value={this.state.value} index={0}>
          <TicketList 
            tickets={this.state.activeTickets} 
            onResolve={this.resolveActiveTicket}
            emptyMessage={"No orders :("}
          />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <TicketList 
            tickets={this.state.resolvedTickets} 
            emptyMessage={"No complete orders :("}
          />
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <TicketList 
            tickets={this.state.serviceTickets} 
            onResolve={this.resolveServiceTicket}
            emptyMessage={"Everything is running smooth :)"}
          />
        </TabPanel>
      </div>
  );
  }
  
}

