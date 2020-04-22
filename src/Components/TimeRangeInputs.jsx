import React from "react";
import TimePicker from 'react-time-picker';

const TimeRangeInputs = (props) => {
    return (
        props.timeRanges.map((val, idx) => {
            let timeRangeId = `timeRange-${idx}`;
            let startId = `start-${idx}`;
            let endId = `end-${idx}`;

            return (
                <div key={idx} className="time-range">
                    <label htmlFor={timeRangeId}>Time Range</label>
                    <label htmlFor={startId}>Start Time</label>
                    <input 
                        type="time" 
                        data-id={idx}
                        name={startId}
                        value={props.timeRanges[idx].startTime} 
                        className="startTime"
                    />
                    <label htmlFor={endId}>End Time</label>
                    <input 
                        type="time" 
                        data-id={idx}
                        name={endId}
                        value={props.timeRanges[idx].endTime} 
                        className="endTime"
                    />
                    { props.timeRanges.length > 1 &&
                        <button onClick={() => props.removeTimeRange(idx)}>Remove Time Range</button>
                    }
                    
                </div>
            );
        })
    );
}
export default TimeRangeInputs;