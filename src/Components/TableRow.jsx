import React from 'react'
import Ticket from './Ticket';

export default function TableRow(props){
    const {tableID, tickets, onResolve} = props;

    return(
        <div className="TableList-Container">
            <div className="Table-Data">
                {tickets.map((ticket, index) => (
                    <Ticket name={index} onResolve={onResolve} orders={ticket.orderItems} />
                ))}
            </div>
        </div>
    )
}