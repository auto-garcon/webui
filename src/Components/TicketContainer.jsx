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
    fetch(this.state.proxy_url + `https://autogarcon.live/api/restaurant/5/order`, {
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
      data.map((ticket, index) => {
        this.state.curTickets.push(ticket)
      })
      console.log(this.state.curTickets)
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
      console.log(index)
      this.setState({
        activeTickets: this.state.activeTickets.filter((ticket) => {
          if(ticket != index) this.state.resolvedTickets.push(ticket)
        })
      })
      let orderID = index.orderID

      fetch(this.state.proxy_url+ `https://autogarcon.live/api/restaurant/5/order/${orderID}/complete`, {
        method: 'POST',
        mode: "cors",
        headers: {
          'Accept': '*/*',
          'Access-Control-Allow-Origin' : '*',
        }
      })
      //setActiveTickets(activeTickets.filter(event => event !== ticket))
      //setResolvedTickets(resolvedTickets.filter(e=> e !== ticket))
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
/*
  // const [curTickets, setCurTickets] = useState([]);
  // const [activeTickets, setActiveTickets] = useState([]);
  // const [resolvedTickets, setResolvedTickets] = useState([]);
  // const [serviceTickets, setServiceTickets] = useState([]);
  // const [value, setValue] = React.useState(0);
  // const classes = useStyles();
  // const proxy_url = "https://fierce-tundra-17132.herokuapp.com/";
  // const restaurantID = user.restaurantID
  //const [refresh, updateRefresh] = useState(0);

  // useEffect( () => {
  //   // This is a useeffect that will pull all the tickets from the API/DB once the page loads/mounts
  //   fetch(this.state.proxy_url + `https://autogarcon.live/api/restaurant/5/order`, {
  //     method: 'GET',
  //     mode: "cors",
  //     headers: {
  //       'Accept': '
  //       'Access-Control-Allow-Origin' : '*',
  //     }
  //   }).then(res => res.json().then(data => {
  //     data.map((ticket, index) => {
  //       curTickets.push(ticket)
  //     })
  //     console.log(curTickets)
  //     curTickets.map((ticket, index) => {
  //       if(ticket.orderStatus == "OPEN") {
  //         activeTickets.push(ticket)
  //       } else {
  //         resolvedTickets.push(ticket)
  //       }
  //     })
  //   }).catch(err => console.error(err)))
  //     .catch(err => console.log(err));
  // }, [refresh]);

  // const resolveActiveTicket = (index) => {
  //     console.log(index)
  //     //setActiveTickets(activeTickets.filter(event => event !== ticket))
  //     //setResolvedTickets(resolvedTickets.filter(e=> e !== ticket))
  // }

  // const resolveServiceTicket = (event, ticket) => {
  //   setResolvedTickets(resolvedTickets => [...resolvedTickets,1])
  // }

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const onRefresh = () => {
  //   updateRefresh(refresh => refresh + 1)
  //   console.log(refresh)
  // }
 */
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

