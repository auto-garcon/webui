import React from 'react';
import TimeRangeInputs from './TimeRangeInputs';
import './CSS/CreateMenu.css';
import CategoryInputs from './CategoryInputs';
import MenuContent from './MenuContent';

class CreateMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      menuName: "",
      status: "",
      timeRanges: [{startTime: "", endTime: ""}],
      categories: [{categoryName: ""}],
      menuItems: {},
    }

    this.addMenuItem = this.addMenuItem.bind(this);
    this.updateMenuItem = this.updateMenuItem.bind(this);
    this.removeMenuItem = this.removeMenuItem.bind(this);
  }

  addMenuItem(menuItem) {
    const menuItems = {...this.state.menuItems};
    const timestamp = Date.now();

    menuItems['menuItem-' + timestamp] = menuItem;

    this.setState({menuItems}, () => console.log(this.state.menuItems));
  }

  updateMenuItem(key, menuItem) {
    const menuItems = {...this.state.menuItems};
    menuItems[key] = menuItem;

    this.setState({ menuItems });
  }

  removeMenuItem(key) {
    const menuItems = {...this.state.menuItems};
    menuItems[key] = null;

    this.setState({ menuItems });
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
      categories: [...prevState.categories, {categoryName: ""}]
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
      </form>
      <MenuContent
        menuItems={this.state.menuItems}
        addMenuItem={this.addMenuItem}
        updateMenuItem={this.updateMenuItem}
        removeMenuItem={this.removeMenuItem} />
    </div>
      
    );
  }
}
export default CreateMenu;