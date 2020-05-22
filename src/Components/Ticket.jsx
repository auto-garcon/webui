import React from 'react'
import Button from '@material-ui/core/Button';
import OrderItem from './OrderItem'
import AppBar from '@material-ui/core/AppBar';


export default function Ticket(props) {
	const { name, orders, total, orderTime} = props;
    return (
		<>
			<h1 className="TicketHeader">TICKET {name + 1}</h1>
			<h5 className="TicketPrice-Label">
				Total: ${total.toFixed(2)}
			</h5>
			<h5 className="TicketOrderTime-Label">
				OrderTime: {orderTime}
			</h5>
			
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
		</>
			
    )
}