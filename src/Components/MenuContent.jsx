import React from 'react';

import AddMenuItemForm from './AddMenuItemForm';

class MenuContent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.renderMenuContent = this.renderMenuContent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const menuItem = this.props.menuItems[key];
        
        //update menu item with new data
        const updateMenuItem = {
            ...menuItem,
            [e.target.name]: e.target.value
        };

        this.props.updateMenuItem(key, updateMenuItem)
    }

    //TODO: need to make category const for options, make sure file image works
    renderMenuContent(key) {
        const menuItem = this.props.menuItems[key];
        console.log(menuItem);
        return (
            <div className='menuItem-edit' key={key}>
                <input type='text' placeholder='Menu Item Name' name='itemName'
                    value={menuItem.itemName} onChange={(e) => this.handleChange(e, key)} />
                <input type='text' placeholder='Menu Item Price' name='price'
                    value={menuItem.price} onChange={(e) => this.handleChange(e, key)} />
                <select name='category' value={menuItem.category} onChange={(e) =>
                    this.handleChange(e, key)} >
                    <option value='category 1'>Category 1</option>
                    <option value='category 2'>Category 2</option>
                </select>
                <textarea placeholder='Menu Item Description' name='description' value={menuItem.description}
                    onChange={(e) => this.handleChange(e, key)} />
                <button onClick = {() => this.props.removeMenuItem(key)}>Remove Menu Item</button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <label>{this.props.category.categoryName}</label>
                <input></input>
                {Object.keys(this.props.menuItems).map(this.renderMenuContent)}
                <AddMenuItemForm addMenuItem={this.props.addMenuItem} />
            </div>
        );
    }
}

export default MenuContent;

