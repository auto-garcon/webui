import React from 'react';
//import './CSS/CreateMenu.css';
import TimePicker from 'react-time-picker';

class CreateMenu extends React.Component {
  state = {
      categories: [{name: "", menuItems: []}],
      timeRanges: [{startTime: null, endTime: null}],
  }
  render() {
    return (
    <div>
      <div>
          <h1>Create Menu</h1>
      </div>
      <div>
          <h2>Menu Information</h2>
      </div>
      <form>
        <label htmlFor="Menu Name">Menu Name</label>
        <input type="text" name="menuName" id="menuName" />
        <h3>Time Ranges</h3>
        <button>Add new time range</button>
        <br></br>
        {
            this.state.timeRanges.map((val, idx) => {
                let startId = `startTime-${idx}`;
                let endId = `endTime-${idx}`;
                return (
                    <div key = {idx}>
                        <label>{`Time Range #${idx + 1}`}</label>
                        <label htmlFor={startId}>Start Time</label>
                        <TimePicker/>
                        <br></br>
                        <label htmlFor={endId}>End Time</label>
                        <TimePicker/>
                    </div>
                )
            })
        }
        <label htmlFor="status">Menu Status</label>
        <select id="status" name="status">
            <option value="active">Active</option>
            <option value="draft">Draft</option>
        </select>
        <br></br>
      </form>
    </div>
      
    );
  }
}
export default CreateMenu;