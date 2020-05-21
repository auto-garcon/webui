import React, {useEffect, useState} from 'react';
import TableRow from './TableRow'


export default class TicketList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: this.props.tickets,
            onResolve: this.props.onResolve,
            tableIDs: [],
            sortTables: () => {
                let curID
                this.state.tickets.map((ticket, index) => {
                    curID = ticket.tableID
                    if(!this.state.tableIDs.includes(curID)) {
                        this.state.tableIDs.push(curID)
                    }
                    console.log(!!this.state.tableIDs.length)
                })
            }
        }
    }

    componentWillMount() {
        this.state.sortTables()
    }

    render(){
        return (
            <div className="TicketList-Container">
                {this.state.tableIDs.length > 0 ? (this.state.tableIDs.map(ID =>(
                    <TableRow tableID={ID} tickets={this.state.tickets} onResolve={this.state.onResolve}/>
                ))) : (
                    <h1 className="Empty-List">No orders placed</h1>
                )}
            </div>
        );
    }
}