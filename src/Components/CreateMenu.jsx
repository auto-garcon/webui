import React from 'react';
import TimeRangeInputs from "./TimeRangeInputs";
import './CSS/CreateMenu.css';
import CategoryInputs from './CategoryInputs';

class CreateMenu extends React.Component {
  state = {
    menuName: "",
    status: "",
    timeRanges: [{startTime: "", endTime: ""}],
    categories: [{categoryName: ""}],
    menutItems: [{itemName: "", description: "", category: "", allergens:[]}]
  }

  handleChange = (e) => {
    console.log(e.target.className);
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
    <div class="createMenu">
      <div>
        <h1>Create Menu</h1>
      </div>
      <div>
        <h2>Menu Information</h2>
      </div>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <h3 htmlFor="name">Menu Name</h3>
        <input type="text" name="menuName" id="menuName" value={menuName} />
        <h3 htmlFor="status">Menu Status</h3>
        <select id="status" name="status">
            <option value="active">Active</option>
            <option value="draft">Draft</option>
        </select>
        <h3>Time Ranges</h3>
        <button onClick={this.addTimeRange}>Add new time range</button>
        <TimeRangeInputs timeRanges={timeRanges} />
      </form>
      <div>
        <h2>Menu Categories</h2>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <button onClick={this.addCategory}>Add new category</button>
          <CategoryInputs categories={categories}/>
          <br></br>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
      
    );
  }
}
export default CreateMenu;