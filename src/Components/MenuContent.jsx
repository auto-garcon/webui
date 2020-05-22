/*
    MenuContent Component: This component renders the already created menu items, as well as the AddMenuItemForm component.
*/

import React from 'react';
import './CSS/MenuContent.css';
import AddMenuItemForm from './AddMenuItemForm';

const ALLERGENS = ["meat", "dairy", "nuts", "gluten", "soy", "other"];

class MenuContent extends React.Component {
    constructor(props) {
        super(props);
        this.renderMenuContent = this.renderMenuContent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /*
        Function: handleChange
            This function calls to update the state when a change to an existing menu item is made
        Parameters:
            e: event object
            key: the index of the menuItem in the menuItems array being updated
    */
    handleChange(e, key) {
        const menuItem = this.props.menuItems[key];
        const value = ALLERGENS.includes(e.target.name) ? e.target.checked : e.target.value;
        //update menu item with new data
        const updateMenuItem = {
            ...menuItem,
            [e.target.name]: value
        };

        this.props.updateMenuItem(key, updateMenuItem)
    }

    /*
        Function: renderMenuContent
            This function renders a menu item.
        Parameters:
            key: the index of the menuItem being rendered
    */
    renderMenuContent(key) {
        const menuItem = this.props.menuItems[key];
        
        return (
            <div className='menuItem-edit' key={key}>
                <input type='text' placeholder='Menu Item Name' name='name'
                    value={menuItem.name} onChange={(e) => this.handleChange(e, key)} required/>
                <input type='text' placeholder='Menu Item Price' name='price'
                    value={menuItem.price} onChange={(e) => this.handleChange(e, key)} required/>
                <input type='text' placeholder='Calories' name='calories'
                    value={menuItem.calories} onChange={(e) => this.handleChange(e, key)} required/>
                <br></br>
                <div className="allergens">
                    {ALLERGENS.map((allergen) => {
                        return(
                            <label>{allergen}: 
                                <input
                                    type="checkbox"
                                    name={allergen}
                                    checked={menuItem[allergen]}
                                    onChange={(e) => this.handleChange(e, key)}
                                    className="form-check-input"
                                />
                            </label>
                        );
                    })}
                </div>
                <textarea placeholder='Menu Item Description' name='description' value={menuItem.description}
                    onChange={(e) => this.handleChange(e, key)} required/>
                <input type='file' name='uploaded_file' accept='.png' />
                <button onClick = {() => this.props.removeMenuItem(key, menuItem)} type="button">Remove Menu Item</button>
            </div>
        );
    }

    /*
        Function: render
            This function renders a single category with the existing menu items and an add menu item form.
    */
    render() {
        return (
            <div>
                <label>Category Name</label>
                {/*TODO: CREATE A REMOVE CATEGORY BUTTON*/}
                <input className="categoryName" id="category-name" data-id = {this.props.idx} onChange={this.onChange}></input>
                {Object.keys(this.props.menuItems).map(this.renderMenuContent)}
                <AddMenuItemForm addMenuItem={this.props.addMenuItem} idx={this.props.idx} />
            </div>
        );
    }
}

export default MenuContent;

