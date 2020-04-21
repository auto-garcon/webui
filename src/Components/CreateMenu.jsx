import React from 'react';
import TimeRangeInputs from './TimeRangeInputs';
import './CSS/CreateMenu.css';
import MenuContent from './MenuContent';

class CreateMenu extends React.Component {
  constructor() {
    super();

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
  }

  addMenuItem(menuItem) {
    const timestamp = Date.now();

    this.state.categories[menuItem.idx].menuItems['menuItem-' + timestamp] = menuItem;

    this.setState({...this.state.categories[menuItem.idx].menuItems}, () => console.log(this.state));
  }

  updateMenuItem(key, menuItem) {
    this.state.categories[menuItem.idx].menuItems[key] = menuItem;

    this.setState({...this.state.categories[menuItem.idx].menuItems}, () => console.log(this.state));
  }

  removeMenuItem(key, menuItem) {
    delete this.state.categories[menuItem.idx].menuItems[key];
    console.log(this.state);

    this.setState({ ...this.state.categories[menuItem.idx].menuItems });
  }
  

  handleChange = (e) => {
    console.log(e.target.dataset.id);
    console.log(e.target.className);
    console.log(e.target.value);
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
    console.log(this.state);
  }

  addTimeRange = (e) => {
    this.setState((prevState) => ({
      timeRanges: [...prevState.timeRanges, {startTime: "", endTime: ""}]
    }));
    console.log(this.state);
  }

  addCategory = (e) => {
    this.setState((prevState) => ({
      categories: [...prevState.categories, {categoryName: "", menuItems: {}}]
    }));
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  renderMenu(key) {
    return (
      <MenuContent
        menuItems={this.state.categories[key].menuItems}
        category= {this.state.categories[key]}
        idx={key}
        addMenuItem={this.addMenuItem}
        updateMenuItem={this.updateMenuItem}
        removeMenuItem={this.removeMenuItem} />
    );
    
  }
  
  render() {
    let {menuName, status, timeRanges, categories, menuItems} = this.state;
    return (
    <div className="createMenu">
      <div>
        <h1>Create Menu</h1>
      </div>
      <div>
        <h2>Menu Information</h2>
      </div>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <h3 htmlFor="name">Menu Name</h3>
        <input type="text" name="menuName" id="menuName" defaultValue={menuName} />
        <h3 htmlFor="status">Menu Status</h3>
        <select id="status" name="status" className="status">
            <option disabled selected value> -- select an status -- </option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
        </select>
        <h3>Time Ranges</h3>
        <button onClick={this.addTimeRange}>Add new time range</button>
        <TimeRangeInputs timeRanges={timeRanges}/>
        <h2>Menu Content</h2>
        <button onClick={this.addCategory}>Add new category</button>
        {Object.keys(this.state.categories).map(this.renderMenu)}
        <button>Save</button>
        <button>Save and close</button>
        <button>Cancel</button>
      </form>
      
    </div>     
    );
  }
}
export default CreateMenu;