import React, { useState, useEffect } from 'react'
import './CSS/MenuContainer.css'
import Menu from './Menu'

export default function MenuContainer() {
    const [ curMenus, setCurMenus ] = useState([]);

    useEffect( () => {
        // This is a useeffect that will pull all the menus from the API/DB once the page loads/mounts
        const menus = [
            {
                menuID: 1,
                status: "Active",
                type: "Specials",
                timeRange:{
                    start: "07:00",
                    stop: "22:00"
                },
                numItems: 5,
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
    }, [])
    return (
        <div className="menu-container">
            <h1 className="tickets-title" style={{textAlign:"center"}}>Menus</h1>
            <table>
                <tr>
                    {curMenus.map((menu, i) =>(
                        <td>
                            <Menu menu={menu} key={i} />
                        </td>
                    ))}
                </tr>
            </table>
        </div>
    )
}
