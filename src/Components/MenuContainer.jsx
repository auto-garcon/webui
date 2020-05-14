/*
    MenuContainer Component: This component renders the menu homepage.
    The user will see the menus previously created that they will be able to click on to edit.
    The user will have the option to create a new menu.
*/

import React, { useState, useEffect } from 'react'
import './CSS/MenuContainer.css'
import { AgGridReact } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default function MenuContainer() {
    const [ curMenus, setCurMenus ] = useState([]);
    const tableHeaders = [{headerName: "Menu Name", field: "menuName", sortable: true, filter: true},
                            {headerName: "Status", field: "status", sortable: true, filter: true},
                            {headerName: "Start Time", field: "timeRange.start", sortable: true},
                            {headerName: "End Time", field: "timeRange.stop", sortable: true},
                            {headerName: "Date Created", field: "dateCreated", sortable: true},
                            {headerName: "Last Date Edited", field: "dateEdited", sortable: true}];

    //TODO: This is where I will make my get calls to retrieve previously made menus. This is just dummy data for now.
    useEffect( () => {
        // This is a useeffect that will pull all the menus from the API/DB once the page loads/mounts
        const menus = [
            {
                menuID: 1,
                menuName: "Breakfast",
                status: "Draft",
                type: "Specials",
                timeRange:{
                    start: "07:00",
                    stop: "22:00"
                },
                numItems: 5,
                dateCreated: "03/29/2020",
                dateEdited: "03/29/2020",
                items: [
                    {
                        itemName: 'Fried Chicken',
                        description: 'some description...',
                        image: 'some image...',
                        allergens: 'some allergens',
                        spice: "HOT",
                        price: 50.00,
                    },
                    {
                        itemName: 'Stuffed Mushrooms',
                        description: 'some description...',
                        image: 'some image...',
                        allergens: 'some allergens',
                        spice: " ",
                        price: 8.75,
                    },
                    {
                        itemName: 'Fried Fish',
                        description: 'some description...',
                        image: 'some image...',
                        allergens: 'some allergens',
                        spice: " ",
                        price: 13.00,
                    },
                    {
                        itemName: 'Lobster Tail',
                        description: 'some description...',
                        image: 'some image...',
                        allergens: 'some allergens',
                        spice: "MED",
                        price: 58.75,
                    },
                ]
            },
            {
                menuID: 2,
                menuName: "Lunch",
                status: "Active",
                type: "Lunch",
                timeRange:{
                    start: "11:00",
                    stop: "16:00"
                },
                numItems: 1,
                items: [
                    {
                        itemName: "Sausage Pizza",
                        description: 'some description...',
                        image: 'some image...',
                        allergens: 'some allergens',
                        spice: " ",
                        price: 12.34,
                    }
                ]
            },
            {
                menuID: 3,
                status: "Active",
                menuName: "Dessert",
                type: "Desert",
                timeRange:{
                    start: "16:00",
                    stop: "22:00"
                },
                numItems: 1,
                items: [
                    {
                        itemName: 'Ice Cream Sunday',
                        description: 'some description...',
                        image: 'some image...',
                        allergens: 'some allergens',
                        spice: " ",
                        price: 23.00,
                    }
                ]
            }
        ]
        setCurMenus(menus);
    }, []);

    //this renders the AgGrid containing the menus and it renders the create new menu button
    //THIS IS A WIP
    return (
        <div className="menu-container">
            <h1 className="tickets-title" style={{textAlign:"center"}}>Menus</h1>
            <Link to="/dashboard/createmenu">
                <Button className="create-button" >⊕ Create new menu</Button>
            </Link>
            <div className="ag-theme-balham">
                <AgGridReact
                    columnDefs={tableHeaders}
                    rowData={curMenus}>
                </AgGridReact>
            </div>
        </div>
    )
}
