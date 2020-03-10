import React from 'react'
import Card from '@material-ui/core/Card'
import CardBody from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	Card: {
		border: "10",
		boxShadow: "0 .5px 10px",
		width: "20em",
		margin: "0 auto",
		marginBottom: "30px",
		marginTop: "30px",
		paddingRight: "10px",
		paddingLeft: "10px",
		display: "inline-block",
		wordWrap: "break-word",
		textAlign: "center",
		justifyContent: "center"
	}
}));

export default function Menu(props) {
	const classes = useStyles();
	const { menu } = props;
    return (		
		<Card className={classes.Card}>
			<CardBody>
				<h2>ID: {menu.menuID}</h2>
                <p><strong>Status: </strong>{menu.status}</p>
                <p><strong>Type: </strong>{menu.type}</p>
                <p><strong>TimeRange: </strong>{menu.timeRange.start} - {menu.timeRange.stop}</p>
                <p><strong>Number of Items: </strong>{menu.numItems}</p>
			</CardBody>
            <CardBody>
                <h4>Items</h4>
                {menu.items.map(item =>(
                    <>
                    <p><strong>Item Name:</strong> {item.itemName}</p>
                    <p>Description: {item.description}</p>
                    <p>image coming soon</p>
                    <p>Allergens: {item.allergens}</p>
                    <p>Spice Level: {item.spice}</p>
                    <p>Price: ${item.price}</p>
                    </>
                ))}
            </CardBody>
		</Card>
				
    )
}