import React from 'react'
import Button from '@material-ui/core/Button';


export default function Ticket(props) {
	const {onResolve, name} = props;
    return (
		<div>
			<h1>TICKET {name}</h1>
			{ onResolve === undefined ? null: (
				<Button variant="contained" color="primary" onClick={onResolve}>
					Resolve
				</Button>
			)}

		</div>
    )
}
