import React from 'react'
import Button from '@material-ui/core/Button';
import OrderItem from './OrderItem'

export default function Ticket(props) {
	const {onResolve, name, orders} = props;
    return (
		<div className="Ticket-Container">
			<h1>TICKET {name}</h1>
			{orders.map((order, index) => (
				<OrderItem
					comments={order.comments}
					itemName={order.itemName}
					price={order.price}
					quantity={order.quantity}
					orderID={order.orderID}
				/>	 
			))}
			{ onResolve === undefined ? null: (
				<Button variant="contained" color="primary" onClick={onResolve}>
					Resolve
				</Button>
			)}
		</div>
    )
}