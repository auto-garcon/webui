import React from 'react'
import Ticket from './Ticket';

export default function TableRow(props){
    const {tickets, del} = props;

    return(
        <div className="TableList-Container">
            <div className="Table-Data">
                {!!tickets ? (tickets.map((ticket, index) => (
                    <Ticket 
                        name={index} 
                        delete={del} 
                        orders={ticket.orderItems}
                        key={index} 
                    />
                ))) : (
                    <h1>No tickets for this table</h1>
                )}
            </div>
        </div>
    )
}