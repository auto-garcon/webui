/*
    TimeRangeInputs Component: This component defines how a time range input is rendered.
    This includes a start time, stop time, and an option to remove the time range.
    The user is required to have at least one time range per menu.
*/
import React from "react";

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
                        required
                    />
                    <label htmlFor={endId}>End Time</label>
                    <input 
                        type="time" 
                        data-id={idx}
                        name={endId}
                        value={props.timeRanges[idx].endTime} 
                        className="endTime"
                        required
                    />
                    {/*Only show remove button when there is more than one time range*/}
                    { props.timeRanges.length > 1 &&
                        <button onClick={() => props.removeTimeRange(idx)}>Remove Time Range</button>
                    }
                    
                </div>
            );
        })
    );
}
export default TimeRangeInputs;