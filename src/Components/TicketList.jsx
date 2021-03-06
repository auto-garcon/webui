import React, {useEffect, useState} from 'react';
import TableRow from './TableRow'
import Ticket from './Ticket';
import Button from '@material-ui/core/Button';


export default class TicketList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: this.props.tickets,
            onResolve: this.props.onResolve,
            tableIDs: []
        }
    }

    sortTables() {
        let curID
        this.state.tickets.map((ticket, index) => {
            curID = ticket.tableID
            if(!this.state.tableIDs.includes(curID)) {
                this.state.tableIDs.push(curID)
            }
        })
    }

    componentWillMount() {
        this.sortTables()
    }

    onResolve = (id) => {
        this.props.onResolve(id);
    }

    render(){
        return (
            <div className="TicketList-Container">
                {this.state.tableIDs.length > 0 ? (this.state.tableIDs.map((tableID, index) =>(
                    <div key={index} className="TicketList">
                        <h1 style={{"textAlign": "center", "backgroundColor": "#2b2d42", "color": "#edf2f4"}}>TABLE: {tableID}</h1>
                        {this.state.tickets.map((ticket, index) => (
                            <>
                                {ticket.tableID === tableID ? (
                                    <div className="Ticket-Container">
                                        <Ticket
                                            name={index}
                                            key={index} 
                                            orders={ticket.orderItems}
                                            total={ticket.chargeAmount}
                                            orderTime={ticket.orderTime}
                                        />
                                    
                                        
                                        {!!this.props.onResolve ? (
                                            <div key={index} className="Resolve-Button">
                                                <Button 
                                                    fullWidth
                                                    variant="contained" 
                                                    color="primary" 
                                                    onClick={() => this.onResolve(ticket)}
                                                >
                                                    Resolve
                                                </Button>
                                            </div>
                                        ) : (null)}
                                    </div>
                            ) : ( null )}
                            </>
                        ))}
                    </div>
                ))) : (
                    <h1 className="Empty-List">{this.props.emptyMessage}</h1>
                )}
            </div>
        );
    }
}