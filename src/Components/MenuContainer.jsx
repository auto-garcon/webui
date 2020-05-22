/*
    MenuContainer Component: This component renders the menu homepage.
    The user will see the menus previously created that they will be able to click on to edit.
    The user will have the option to create a new menu.
*/

import React, { useState, useEffect } from 'react';
import './CSS/MenuContainer.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default function MenuContainer(props) {
    const [ curMenus, setCurMenus ] = useState([]);
    const {user} = props;
    const proxy_url = "https://fierce-tundra-17132.herokuapp.com/";

    useEffect( () => {
        console.log(user);
        fetch(proxy_url + `https://autogarcon.live/api/restaurant/38/menu`, {
        method: 'GET',
        mode: "cors",
        headers: {
         'Accept': '*/*',
        'Access-Control-Allow-Origin' : '*',
       }
     }).then(res => res.json())
       .then(data => setCurMenus(data))
       .catch(err => console.log(err));
     console.log(curMenus);  
    }, []);

    var getFormattedTime = function (fourDigitTime){
        if (fourDigitTime.length === 2) {
            return "12:00 am"
        }
        var hours24 = parseInt(fourDigitTime.substring(0,2));
        var hours = ((hours24 + 11) % 12) + 1;
        var amPm = hours24 > 11 ? 'pm' : 'am';
        var minutes = fourDigitTime.substring(2);
    
        return hours + ':' + minutes + amPm;
    };
    

    //this renders the AgGrid containing the menus and it renders the create new menu button
    return (
        <div className="menu-container">
            <h1 className="tickets-title" style={{textAlign:"center"}}>Menus</h1>
            <Link to={{pathname: "/createmenu", userProps:{restaurantID: user.restaurantID}}}>
                <Button className="create-button" >⊕ Create new menu</Button>
            </Link>
            <br></br>
            <br></br>
            <CardDeck >
                {curMenus.map((curMenu) => {
                    console.log(curMenu);
                    return(
                        <Card className="card" key={curMenu.menuID} style={{border: 'solid'}}>
                            {/*<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />*/}
                            <Card.Body className="card-body">
                                <Card.Title>{curMenu.menuName}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{curMenu.menuStatus}</ListGroup.Item>
                                {curMenu.timeRanges.map((time) => {
                                    var startStr = time.startTime.toString();
                                    var endStr = time.endTime.toString();
                                    if(startStr.length < 4) {
                                        startStr = "0" + startStr;
                                    }
                                    if(endStr.length < 4) {
                                        endStr = "0" + endStr;
                                    }
                                    return(
                                        <ListGroup.Item>{getFormattedTime(startStr)}-{getFormattedTime(endStr)}</ListGroup.Item>
                                    );
                                })}
                                
                            </ListGroup>
                            <Card.Body>
                            <Link to={{pathname: "/editmenu", containerProps:{menu: curMenu}}}>
                                <Button className="edit-button">Edit Menu</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    );
                })}
            </CardDeck>
        </div>
    )
}
