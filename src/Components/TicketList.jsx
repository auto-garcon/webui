import React, {useEffect, useState} from 'react'
import Ticket from './Ticket';

export default function TicketList(props) {
const {tickets, onResolve} = props;
    return (
        <div className="TicketList-Container">
            {tickets.map((ticket, i) => (
                <Ticket onResolve={onResolve} value={i}/>
            ))}
        </div>
    );
}
