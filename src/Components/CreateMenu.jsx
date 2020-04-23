/*
  CreateMenu Component: This component is the base for the create menu page.
  It is split up in displaying the Menu Information (name, time ranges, status) 
  and the Menu Content (categories with menu items).
*/
import React from 'react';
import TimeRangeInputs from './TimeRangeInputs';
import './CSS/CreateMenu.css';
import MenuContent from './MenuContent';
import { Link } from 'react-router-dom';

class CreateMenu extends React.Component {
  constructor() {
    super();
    //this state will be passed to the backend after some manipulation
    this.state = {
      menuName: "",
      status: "",
      timeRanges: [{startTime: "", endTime: ""}],
      categories: [{categoryName: "", menuItems: {}}]
    }

    this.addMenuItem = this.addMenuItem.bind(this);
    this.updateMenuItem = this.updateMenuItem.bind(this);
    this.removeMenuItem = this.removeMenuItem.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.removeTimeRange = this.removeTimeRange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTimeRange = this.addTimeRange.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
    Function: addMenuItem
      This function is called when the user clicks the 'add item' after creating a menu item.
      A time stamp is created and the menuItem is created under it's designated category.
    Parameters:
      menuItem: the menu item being added
  */
  addMenuItem(menuItem) {
    const timestamp = Date.now();
    var menuItems =  this.state.categories[menuItem.idx].menuItems;
    menuItems['menuItem-' + timestamp] = menuItem;
    this.setState({ menuItems }, () => console.log(this.state));
  }

  /*
    Function: updateMenuItem
      This function is called when the user changes any of the inputs to a menu item that has already been added by the user.
    Parameters:
      key: the index of the menu item in the menuItems object
      menuItem: the menuItem to be updated
  */
  updateMenuItem(key, menuItem) {
    var category = this.state.categories[menuItem.idx].menuItems;
    category[key] = menuItem;
    this.setState({ category }, () => console.log(this.state));
  }

  /*
    Function: removeMenuItem
      This function is called when the user clicks the 'remove item' button.
      The menu item will be removed from the view and the state
    Parameters:
      key: the index of the menu item in the menuItems object
      menuItem: the menuItem to be deleted
  */
  removeMenuItem(key, menuItem) {
    delete this.state.categories[menuItem.idx].menuItems[key];
    this.setState({ ...this.state.categories[menuItem.idx].menuItems }, () => console.log(this.state));
  }

  /*
    Function: handleChange
      This function is called when a change has been made to any of the inputs in the form.
    Parameters:
      event: the event object
  */
  handleChange(e) {
    if (["startTime", "endTime"].includes(e.target.className)) {
      let timeRanges = [...this.state.timeRanges];
      timeRanges[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ timeRanges }, () => console.log(this.state.timeRanges));
    } 
    else if (["categoryName"].includes(e.target.className)) {
      let categories = [...this.state.categories];
      categories[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ categories }, () => console.log(this.state.categories));
    }
    else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  /*
    Function: addTimeRange
      This function is called when the user clicks the 'add time range' button.
      Another time range will be added to the view and the state.
    Parameters:
      event: event object from the onClick function
  */
  addTimeRange(e) {
    this.setState((prevState) => ({
      timeRanges: [...prevState.timeRanges, {startTime: "", endTime: ""}]
    }));
    console.log(this.state);
  }

  /*
    Function: addCategory
      This function is called when the user clicks the 'add category' button.
      A category with an empty category name and an add menu item object will appear.
    Parameters:
      event: event object from the onClick function
  */
  addCategory(e) {
    this.setState((prevState) => ({
      categories: [...prevState.categories, {categoryName: "", menuItems: {}}]
    }));
    console.log(this.state);
  }

   /*
    Function: handleSubmit
      This function is called when the user clicks the save button. (STILL IN PROGRESS)
    Parameters:
      event: event object from the onClick function
  */
  handleSubmit(e) {
    //TODO FUNCTIONALITY
    e.preventDefault();
  }

  /*
    Function: removeTimeRange
      When the user clicks the 'remove time range' button, this function will remove the time range from the
      state.
    Parameters:
      key: the index of the timeRange object in the timeRange array that the user would like to remove
  */
 removeTimeRange(key) {
  var timeRanges = this.state.timeRanges;
  timeRanges.splice(key, 1);
  this.setState([...this.state.timeRanges], () => console.log(this.state));
  }

  /*
    Function: renderMenu
      This function is called for each category and will render the menu items for that category
    Parameters:
      key: the index of the current category being rendered
  */
  renderMenu(key) {
    return (
      <MenuContent
        menuItems={this.state.categories[key].menuItems}
        idx={key}
        addMenuItem={this.addMenuItem}
        updateMenuItem={this.updateMenuItem}
        removeMenuItem={this.removeMenuItem} />
    );
    
  }
  
  /*
    Function: render
      This function renders the menu info and menu content to the page.
  */
  render() {
    let {menuName, status, timeRanges, categories} = this.state;
    return (
    <div className="createMenu">
      <div>
        <h1>Create Menu</h1>
      </div>
      <div>
        
      </div>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <h2>Menu Information</h2>
        <h3 htmlFor="name">Menu Name</h3>
        <input type="text" name="menuName" id="menuName" defaultValue={menuName} />
        <h3 htmlFor="status">Menu Status</h3>
        <select id="status" name="status" className="status" defaultValue={status}>
            <option disabled selected value> -- select an status -- </option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
        </select>
        <h3>Time Ranges</h3>
        <button id="add-button" onClick={this.addTimeRange}>Add new time range</button>
        <TimeRangeInputs timeRanges={timeRanges} removeTimeRange={this.removeTimeRange} />
        <h2>Menu Content</h2>
        <button id="add-button" onClick={this.addCategory}>Add new category</button>
        {Object.keys(categories).map(this.renderMenu)}
        {/*TODO: FUNCTIONALITY FOR BUTTONS */}
        <div className="save-buttons">
          <button id="save-button">Save</button>
          <Link to="/">
            <button id="save-close-button">Save and close</button>
          </Link>
          <button id="cancel-button">Cancel</button>
        </div>
      </form>
    </div>     
    );
  }
}
export default CreateMenu;