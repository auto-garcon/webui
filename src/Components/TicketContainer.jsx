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
        tableColor: "lightblue",
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
        tableColor: "grey",
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
        tableColor: "green",
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
      },
      {
        tableid: '4',
        tableColor: "red",
        customerid: '0000',
        customerName: 'Summer A.',
        numMenuItems: 4,
        status: 'open',
        chargeAmount: 67.75,
        items: [
          {
            itemName: 'Stuffed Mushrooms',
            price: 8.75,
            customizations: 'extra garlic sauce'
          },
          {
            itemName: 'Fried Fish',
            price: 13.00,
            customizations: 'extra crunch'
          },
          {
            itemName: 'Garden Salad',
            price: 29.00,
            customizations: 'no tomatoes'
          },
          {
            itemName: 'Ice Cream Sunday',
            price: 23.00,
            customizations: '8 scoops, no chocolate syrup'
          }
        ]
      },
      {
        tableid: '5',
        customerid: '0000',
        tableColor: "orange",
        customerName: 'Riley T.',
        numMenuItems: 2,
        status: 'open',
        chargeAmount: 108.75,
        items: [
          {
            itemName: 'Fried Chicken',
            price: 50.00,
            customizations: 'extra spicy'
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
      <ul className="Ticket-List-Container">
        <li>
          <div id="Active-Ticket-Container" className="Ticket-Container">
            <h1>ACTIVE TICKETS</h1>
          </div>
        </li>
        <li>
          <div id="Resolved-Ticket-Container" className="Ticket-Container">
            <h1>RESOLVED TICKETS</h1>
          </div>
        </li>
        <li>
          <div id="Serice-Ticket-Container" className="Ticket-Container">
            <h1>SERVICE TICKETS</h1>
          </div>
        </li>
      </ul>
    {/* <h1 className="tickets-title" style={{textAlign:"center"}}>Active Tickets</h1>
      <table style={{width:"50%", borderCollapse: "collapse"}}>
        <tr>
          {curTickets.map(ticket => (
            <th style={{backgroundColor: ticket.tableColor}}><h1><strong>Table #</strong> {ticket.tableid}</h1></th>
          ))}
        </tr>
        <tr>
        {curTickets.map( (ticket, i) => (
          <td>
            <Ticket ticket={ticket} key={i}/>
          </td>
        ))}
        </tr>
      </table> */}
    </div>
  );
}
