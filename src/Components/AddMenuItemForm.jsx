import React from "react"

 class AddMenuItemForm extends React.Component {

     constructor () {
         super();
         this.createMenuItem = this.createMenuItem.bind(this);
     }

     

     createMenuItem (event) {
         event.preventDefault();

         //TODO: add allergen and image
         //NOTE: Took category option out
         const menuItem = {
             itemName: this.itemName.value,
             description: this.description.value,
             idx: this.props.idx,
             price: this.price.value,
         }

         this.props.addMenuItem(menuItem);
         this.menuItemForm.reset();
     }

     //TODO: create file uploader and handle input, checkbox list for allergens
     render () {
        const allergens = ["MEAT", "DAIRY", "NUTS", "GLUTEN", "SOY", "OTHER"].map((allergen, key) =>
            <div>
                <input type="checkbox" id={allergen} name={allergen} value={allergen}/>
                <label for={allergen}>{allergen}</label>
            </div>
        );
        return (
             <form className="menuItem-edit" onSubmit={this.createMenuItem}
                ref={(input) => {this.menuItemForm = input}}>
                <input type="text" placeholder="Menu Item Name"
                    ref={(input) => { this.itemName = input}}/>
                <input type="text" placeholder="Menu Item Price"
                    ref={(input) => { this.price = input }} />
                <textarea placeholder="Description"
                    ref={(input) => { this.description= input}}/>
                <button type="submit">+ Add Item</button>
            </form>
         )
     }
 }
 

export default AddMenuItemForm;