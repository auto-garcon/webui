import React from 'react'
import Button from '@material-ui/core/Button';
import OrderItem from './OrderItem'
import AppBar from '@material-ui/core/AppBar';


export default function Ticket(props) {
	const { name, orders} = props;
    return (
		<div className="Ticket-Container">
			<h1>TICKET {name + 1}</h1>
			{orders.map((order, index) => (
				<OrderItem
					comments={order.comments}
					itemName={order.itemName}
					price={order.price}
					quantity={order.quantity}
					orderID={order.orderID}
					key={index}
				/>	 
			))}
		</div>
			
    )
}