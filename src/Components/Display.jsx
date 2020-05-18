/*This is the display component which is part of settings. 
This is where the user can customize the display of the ui and android app
including adding their own logo, colors, and fonts*/


import React, {useState} from 'react'
import {SketchPicker} from 'react-color'
import Button from '@material-ui/core/Button';

function Display() {
    const [primaryColor, setColor] = useState('#fff')
    const [showColorPicker,setShowColorPicker]= useState(false)

    const [secondaryColor, setColor1] = useState('#fff')
    const [showColorPicker1,setShowColorPicker1]= useState(false)
    
  
    return (
      <div >
        <b style = {{color: "#2B2d42"}}> Pick Two Restaurant Colors</b>
        <div>
          <p style = {{color: "#2B2d42"}}>Find Primary Color:</p>
        </div>
          <button
            style ={{background: "#edf2f4"}}
            onClick = {() => setShowColorPicker(showColorPicker =>!showColorPicker)}
            >
              {showColorPicker ? 'Close color picker': 'Open Primary Color Picker'}
          </button>
          {showColorPicker && ( 
            <SketchPicker
              color ={primaryColor} 
              onChange={updatedColor => setColor(updatedColor.hex)}
            />
          )}
          <p style= {{color: primaryColor}}> Primary Color: {primaryColor}</p>
          <div>
          <div>
          <p style = {{color: "#2B2d42"}}>Find Secondary Color: </p>
        </div>
          <button
            style ={{background: "#edf2f4"}}
            onClick = {() => setShowColorPicker1(showColorPicker1 =>!showColorPicker1)}
            >
              {showColorPicker1 ? 'Close color picker': 'Open Secondary Color Picker'}
          </button>
          {showColorPicker1 && ( 
            <SketchPicker
              color ={secondaryColor} 
              onChange={updatedColor => setColor1(updatedColor.hex)}
            />
          )}
          <p style= {{color: secondaryColor}}> Secondary Color: {secondaryColor}</p>
          </div>
        </div>

      
    );

  }
  export default Display;
  
  