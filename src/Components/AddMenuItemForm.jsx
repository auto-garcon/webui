/*
    AddMenuItemForm Component: This component defines the structure of the menuItem and its inputs.
*/
import React from 'react';
import Checkbox from "./Checkbox";


 class AddMenuItemForm extends React.Component {

     constructor () {
         super();
         this.createMenuItem = this.createMenuItem.bind(this);
         this.onCheck = this.onCheck.bind(this);
     }

     /*
        This method is called when the user presses the 'Add Item button'. 
        It takes the input values and creates a menu item object to pass into
        the addMenuItem function defined in the CreateMenu component. 
     */
     createMenuItem (event) {
         event.preventDefault();

        console.log(this.props);

         //TODO: add allergen and image
         //NOTE: Took category option out
         const menuItem = {
            itemName: this.itemName.value,
            description: this.description.value,
            idx: this.props.idx,
            price: this.price.value,
            image: this.image.value,
            calories: this.calories.value,
         }

         /*
            meat: this.meat.value,
            dairy: this.dairy.value,
            nuts: this.nuts.value,
            gluten: this.gluten.value,
            soy: this.soy.value,
            other: this.other.value,
         */

         this.props.addMenuItem(menuItem);
         //reset the form so that the next new item can be created
         this.menuItemForm.reset();
     }

     onCheck(event) {
         this[event.target.name] = this[event.target.checked];
     }

     //TODO: create file uploader and handle input, checkbox list for allergens
     //this method renders the menuItem builder 
     render () {
        const allergens = ["meat", "dairy", "nuts", "gluten", "soy", "other"];
        //menuItem structure for creating a new menuItem
        return (
             <form className="menuItem-edit" onSubmit={this.createMenuItem}
                ref={(input) => {this.menuItemForm = input}}>
                <input type="text" placeholder="Menu Item Name"
                    ref={(input) => { this.itemName = input}} />
                <input type="text" placeholder="Menu Item Price"
                    ref={(input) => { this.price = input }} />
                <input type="text" placeholder="Calories"
                    ref={(input) => { this.calories = input}} />
                <textarea placeholder="Description"
                    ref={(input) => { this.description= input }} />
                <div className="allergens">
                    {allergens.map((allergen) => {
                        return(
                            <label>{allergen}: 
                                <input
                                    type="checkbox"
                                    name={allergen}
                                    checked={this[allergen]}
                                />
                            </label>
                        );
                    })}
                </div>
                {/*ADD FILE UPLOADER HERE */}
                <input type='file' name='uploaded_file' accept='.png' 
                    ref={(input) => {this.image = input}}/>
                {/* This button will call createMenuItem */}
                <button type="submit"> + Add Item </button>
            </form>
         )
     }
 }
 

export default AddMenuItemForm;