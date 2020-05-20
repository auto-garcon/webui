/*
    MenuContainer Component: This component renders the menu homepage.
    The user will see the menus previously created that they will be able to click on to edit.
    The user will have the option to create a new menu.
*/

import React, { useState, useEffect } from 'react'
import './CSS/MenuContainer.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default function MenuContainer(props) {
    const [ curMenus, setCurMenus ] = useState([]);
    const tableHeaders = [{headerName: "Menu Name", field: "menuName", sortable: true, filter: true},
                            {headerName: "Status", field: "status", sortable: true, filter: true}]
    const {user} = props;
    const proxy_url = "https://fierce-tundra-17132.herokuapp.com/";
    //TODO: This is where I will make my get calls to retrieve previously made menus. This is just dummy data for now.
    useEffect( () => {
        console.log(user);
        fetch(proxy_url + `https://autogarcon.live/api/restaurant/5/withmenus`, {
        method: 'GET',
        mode: "cors",
        headers: {
         'Accept': '*/*',
        'Access-Control-Allow-Origin' : '*',
       }
     }).then(res => res.json())
       .then(data => setCurMenus(data.menus))
       .catch(err => console.log(err));
     console.log(curMenus);  
    }, []);

    //this renders the AgGrid containing the menus and it renders the create new menu button
    //THIS IS A WIP
    return (
        <div className="menu-container">
            <h1 className="tickets-title" style={{textAlign:"center"}}>Menus</h1>
            <Link to="/createmenu">
                <Button className="create-button" >⊕ Create new menu</Button>
            </Link>
            <div>
                <CardDeck>
                    {curMenus.map((curMenu) => {
                        return(
                            <div>
                                {/*<Card.Img variant="top" src="holder.js/100px160" />*/}
                                <Card.Body>
                                    <Card.Title>{curMenu.menuName}</Card.Title>
                                </Card.Body>
                            </div>
                        );
                    })}
                </CardDeck>
            </div>
        </div>
    )
}
