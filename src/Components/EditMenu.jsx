import React from 'react';
import TimeRangeInputs from './TimeRangeInputs';
import './CSS/CreateMenu.css';
import MenuContent from './MenuContent';
import { Link } from 'react-router-dom';

class EditMenu extends React.Component {
  constructor(props) {
    super(props);
    var incoming_menu = props.location.containerProps.menu;
    console.log(incoming_menu);
    this.state = {
      menuName: incoming_menu.menuName,
      status: incoming_menu.menuStatus,
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
    this.getMenuItems = this.getMenuItems.bind(this);
    this.findAllergens = this.findAllergens.bind(this);
    this.formatTimeRanges = this.formatTimeRanges.bind(this);
    this.getTimeRanges = this.getTimeRanges.bind(this);
    this.convertToTimeFormat = this.convertToTimeFormat.bind(this);
    this.getAllCategories = this.getAllCategories.bind(this);

    var times = this.getTimeRanges(incoming_menu.timeRanges);
    this.state.timeRanges = times;
    
    var categoriesFormatted = this.getAllCategories(incoming_menu.menuItems);
    this.state.categories = categoriesFormatted;
    console.log(this.state);
  }

  getAllCategories(menuItems) {
    var result = [];
    var categories = menuItems.map((menuItem) => menuItem.category).filter((value, index, self) => self.indexOf(value) === index);
    var i = 0;
    categories.forEach((category) => {
        var items = menuItems.map((menuItem)=> {
            if (menuItem.category === category) {
                menuItem.idx = i;
                return menuItem;
            }
        });
        items = Object.assign({}, items);
        Object.keys(items).forEach(key => items[key] === undefined && delete items[key]);
        result.push({categoryName: category, menuItems: items});
        i++;
    });
    console.log(result);
    return result;
  }

    getTimeRanges(timeRanges) {
        timeRanges.forEach(time => {
            
            time.startTime = this.convertToTimeFormat(time.startTime.toString());
            time.endTime = this.convertToTimeFormat(time.endTime.toString());
        });
        console.log(timeRanges);
        return timeRanges;
    }

    convertToTimeFormat(timeStr) {
        while(timeStr.length < 4) {
            timeStr = "0" + timeStr;
        }
        return timeStr.slice(0,2) + ":" + timeStr.slice(2);
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
    console.log("update", this.state, menuItem)
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
      var menuItems = this.getMenuItems();
      var formattedTimeRanges = this.formatTimeRanges();
      const proxy_url = "https://fierce-tundra-17132.herokuapp.com/";
      //make post call for menu items and images
      const menu = {
        timeRanges: formattedTimeRanges,
        menuStatus: this.state.status.toUpperCase(),
        menuName: this.state.menuName,
        menuItems: menuItems,
        restaurantID: 38,
      }

      //delete menu first
      
      fetch(proxy_url + `https://autogarcon.live/api/restaurant/38/menu/${this.props.location.containerProps.menu.menuID}/remove`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
        },
      })
      .then(res => console.log(res))
      .catch(err => console.log("FAILED", err));
      //TODO: need to get the restaurant ID to send menu
      console.log(JSON.stringify(menu));
      fetch(proxy_url + `https://autogarcon.live/api/restaurant/38/menu/add`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
        },
        body:  JSON.stringify(menu),
      })
      .then(res => console.log(res))
      .catch(err => console.log("FAILED", err));
      /*
      //call for sending images to the backend
      loop to go through each of the images
        fetch('/api/image/:filename', {
          method: 'POST'
        });
      */
  }

  getMenuItems() {
    var menuItems = [];
    console.log(this.state.categories);
    this.state.categories.forEach((category) => {
      console.log(category, "this is the category");
      for(let [key, value] of Object.entries(category.menuItems)) {
          let allergensOnMenuItem = this.findAllergens(value);
          let item = {
            name: value.name,
            description: value.description,
            category: category.categoryName,
            price: parseFloat(value.price),
            allergens: allergensOnMenuItem,
            calories: parseInt(value.calories),
            imagePath: value.uploaded_file,
          };
          menuItems.push(item);
      }
    });
    return menuItems;
  }

  formatTimeRanges() {
    var timeRanges = [];
    this.state.timeRanges.forEach((timeRange) => {
      var tr = {
        startTime: parseInt(timeRange.startTime.replace(":", "")),
        endTime: parseInt(timeRange.endTime.replace(":", ""))
      }
      timeRanges.push(tr);
    });
    return timeRanges;
  }

  findAllergens(menuItem) {
    var allergens = [];
    const allAllergens = ["meat", "dairy", "nuts", "gluten", "soy", "other"];
    allAllergens.forEach((allergenName) => {
      if(menuItem[allergenName]) {
        allergens.push(allergenName.toUpperCase());
      }
    });
    return allergens;
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
        <h1 style= {{color: "#edf2f4"}}>Edit Menu</h1>
      </div>
      <div>
        
      </div>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <h2>Menu Information</h2>
        <h3 htmlFor="name">Menu Name</h3>
        <input type="text" name="menuName" id="menuName" defaultValue={menuName} required/>
        <h3 htmlFor="status">Menu Status</h3>
        <select id="status" name="status" className="status" defaultValue={status} required>
            <option disabled selected value> -- select an status -- </option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
        </select>
        <h3>Time Ranges</h3>
        <button id="add-button" onClick={this.addTimeRange} type="button">Add new time range</button>
        <TimeRangeInputs timeRanges={timeRanges} removeTimeRange={this.removeTimeRange} />
        <h2>Menu Content</h2>
        <button id="add-button" onClick={this.addCategory} type="button">Add new category</button>
        {Object.keys(categories).map(this.renderMenu)}
        {/*TODO: FUNCTIONALITY FOR BUTTONS */}
        <div className="save-buttons">
          <button id="save-button" type="submit">Save</button>
          <Link to="/">
            <button id="save-close-button">Save and close</button>
          </Link>
        </div>
      </form>
      <Link to="/">
        <button id="cancel-button" type="button">Cancel</button>
      </Link>
      
    </div>     
    );
  }
}
export default EditMenu;