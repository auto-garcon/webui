import React from 'react'
import Card from '@material-ui/core/Card'
import CardBody from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	Card: {
		border: "10",
		boxShadow: "0 .5px 4px 0",
		width: "20em",
		marginBottom: "30px",
		marginTop: "30px",
		paddingRight: "10px",
		paddingLeft: "10px",
		display: "inline-block",
		wordWrap: "break-word",
		textAlign: "center",
		
	}
}));

export default function Ticket(props) {
	const classes = useStyles();
	const { ticket } = props;
    return (
		<Card className={classes.Card}>
			<CardBody>
				<h2>Name: {ticket.customerName}</h2>
				<h4>Table: #{ticket.customerid}</h4>
			</CardBody>
			<CardBody>
				<p><strong>Items</strong></p>
				{ticket.items.map((item, index) =>(
					<>
					<p>
						<strong>Item #{index+1}:</strong> {item.itemName}.......${item.price}
					</p>
					<p>
						<strong>Addons:</strong> {item.customizations===" " ? "none" : item.customizations}
					</p>					
					</>
				))}
				<p><strong>Total:</strong> ${ticket.chargeAmount}</p>
			</CardBody>
		</Card>
    )
}
