import React, {useEffect, useState} from 'react'
import Ticket from './Ticket';

export default function TicketList(props) {
const {tickets, onResolve} = props;
const [curTickets, updateCurTickets] = useState([]);

    return (
        <div className="TicketList-Container">
            {tickets.length > 0 ? (tickets.map((ticket, index) => (
                <li key={index}>
                    <Ticket onResolve={onResolve} name={index}/>
                </li>

            ))) : (
                <h1>No tickets to see here</h1>
            )}
        </div>
    );
}
