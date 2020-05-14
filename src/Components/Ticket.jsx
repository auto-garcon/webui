import React from 'react'
import Button from '@material-ui/core/Button';


export default function Ticket(props) {
	const {onResolve} = props;
    return (
		<div>
			<h1>TICKET</h1>
			{ onResolve === undefined ? null: (
				<Button variant="contained" color="primary" onClick={onResolve}>
					Resolve
				</Button>
			)}

		</div>
    )
}
