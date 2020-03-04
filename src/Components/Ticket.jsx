import React from 'react'
import './CSS/Ticket.css'

export default function Ticket(props) {

	const { ticket } = props;
	
    return (
		<div className='ticket'>
			<h1>Name: {ticket.customerName}</h1>
			<h3>Subtotal: ${ticket.chargeAmount}</h3>
			<h3>Order#: {ticket.customerid}</h3>
			<ul className='ticket-list'>{ticket.items.map( item => (
				<>
				<li><strong>Name:</strong> {item.itemName}</li>
				<li>${item.price}</li>
				<li><strong>Addons:</strong> {item.customizations===" " ? "none" : item.customizations}</li>
				</>
			))}
			</ul>
		</div>
    )
}
