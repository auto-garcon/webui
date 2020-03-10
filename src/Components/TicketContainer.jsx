import React, { useEffect, useState } from 'react';
//import logo from './AUTO-GARCON-4.jpeg';
import './CSS/TicketContainer.css';
import Ticket from './Ticket'
//var Link = require('react-router-dom').Link

export default function TicketContainer() {
  const [ curTickets, setCurTickets ] = useState([]); // Holds the state of the number of tickets we current'y have

  useEffect( () => {
    // This is a useeffect that will pull all the tickets from the API/DB once the page loads/mounts
    const tickets = [
      {
        tableid: '1',
        customerid: '1234',
        chargeAmount: 37.50,
        customerName: 'TBevs',
        numMenuItems: 2,
        status: 'open',
        items: [
          {
            itemName: 'Cowboy Burger',
            price: 15.50, // This item object could expand to more stuff
            customizations: 'no pickles'
          },
          {
            itemName: 'Street Tacos Pork',
            price: 11.00,
            customizations: 'no onions'
          },
          {
            itemName: 'Street Tacos Beef',
            price: 11.00,
            customizations: 'no onions, extra cilantro'
          }
        ]
      },
      {
        tableid: '2',
        customerid: '5678',
        chargeAmount: 12.34,
        customerName: 'Mugdha D.',
        numMenuItems: 2,
        status: 'open',
        items: [
          {
            itemName: "Sausage Pizza",
            price: 12.34,
            customizations: 'add bacon, extra chese, light sauce'
          }
        ]
      },
      {
        tableid: '3',
        customerid: '0000',
        customerName: 'Jason Sawin',
        numMenuItems: 2,
        status: 'open',
        chargeAmount: 108.75,
        items: [
          {
            itemName: 'King Crab',
            price: 50.00,
            customizations: 'extra butter sauce'
          },
          {
            itemName: 'Lobster Tail',
            price: 58.75,
            customizations: ' '
          }
        ]
      }
    ]
    setCurTickets(tickets);
  }, []); 

  return (
    <div className="tickercontainer-container">
      <h1 className="tickets-title">Active Tickets</h1>
      {curTickets.map( (ticket, i) => (
        <Ticket ticket={ticket} key={i} />
      ))}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="home">
          Ticket Page
        </p>
      </header> */}
    </div>
  );
}
