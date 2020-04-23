/*
    AddMenuItemForm Component: This component defines the structure of the menuItem and its inputs.
*/
import React from 'react';

 class AddMenuItemForm extends React.Component {

     constructor () {
         super();
         this.createMenuItem = this.createMenuItem.bind(this);
     }

     /*
        This method is called when the user presses the 'Add Item button'. 
        It takes the input values and creates a menu item object to pass into
        the addMenuItem function defined in the CreateMenu component. 
     */
     createMenuItem (event) {
         event.preventDefault();

         //TODO: add allergen and image
         //NOTE: Took category option out
         const menuItem = {
             itemName: this.itemName.value,
             description: this.description.value,
             idx: this.props.idx,
             price: this.price.value,
             calories: this.calories.value,
         }

         this.props.addMenuItem(menuItem);
         //reset the form so that the next new item can be created
         this.menuItemForm.reset();
     }

     //TODO: create file uploader and handle input, checkbox list for allergens
     //this method renders the menuItem builder 
     render () {
        const allergens = ["MEAT", "DAIRY", "NUTS", "GLUTEN", "SOY", "OTHER"].map((allergen, key) =>
            <div>
                <input type="checkbox" id={allergen} name={allergen} value={allergen} />
                <label for={allergen}>{allergen}</label>
            </div>
        );
        //menuItem structure for creating a new menuItem
        return (
             <form className="menuItem-edit" onSubmit={this.createMenuItem}
                ref={(input) => {this.menuItemForm = input}}>
                <input type="text" placeholder="Menu Item Name"
                    ref={(input) => { this.itemName = input}} />
                <input type="text" placeholder="Menu Item Price"
                    ref={(input) => { this.price = input }} />
                <textarea placeholder="Description"
                    ref={(input) => { this.description= input}} />
                <input type="text" placeholder="Calories"
                    ref={(input) => { this.calories = input}} />
                {/*ADD ALLERGENS HERE */}
                {/*ADD FILE UPLOADER HERE */}
                {/* This button will call createMenuItem */}
                <button type="submit"> + Add Item </button>
            </form>
         )
     }
 }
 

export default AddMenuItemForm;