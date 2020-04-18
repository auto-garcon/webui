import React from "react";
import TimePicker from 'react-time-picker';

function TimeRangeInputs(props) {
    return (
        props.timeRanges.map((val, idx) => {
            let timeRangeId = `timeRange-${idx}`;
            let startId = `start-${idx}`;
            let endId = `end-${idx}`;
            return (
                <div key={idx} className="time-range">
                    <label htmlFor={timeRangeId}>{`Time Range #${idx+1}`}</label>
                    <label htmlFor={startId}>Start Time</label>
                    <TimePicker
                        name={startId}
                        data-id={idx}
                        id={startId}
                        value={props.timeRanges[idx].startTime} 
                        className="startTime"
                        disableClock='true'
                    />
                    <label htmlFor={endId}>End Time</label>
                    <TimePicker
                        name={endId}
                        data-id={idx}
                        id={endId}
                        value={props.timeRanges[idx].endTime} 
                        className="endTime"
                        disableClock='true'
                    />
                </div>
            );
        })
    );
}
export default TimeRangeInputs;