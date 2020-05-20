/*This is the display component which is part of settings. 
This is where the user can customize the display of the ui and android app
including adding their own logo, colors, and fonts*/


import React, {useState} from 'react'
import {ChromePicker} from 'react-color'


function Display() {
    const [primaryColor, setColor] = useState('#fff')
    const [showColorPicker,setShowColorPicker]= useState(false)

    const [secondaryColor, setColor1] = useState('#fff')
    const [showColorPicker1,setShowColorPicker1]= useState(false)
    
  
    return (
      <div >
        <p style = {{color: "#2B2d42"}}> Pick Two Restaurant Colors</p>
        <div>
          <p>Find Primary Color:</p>
        </div>
          <button 
            onClick = {() => setShowColorPicker(showColorPicker =>!showColorPicker)}
            >
              {showColorPicker ? 'Close color picker': 'Open Primary Color Picker'}
          </button>
          {showColorPicker && ( 
            <ChromePicker 
              color ={primaryColor} 
              onChange={updatedColor => setColor(updatedColor.hex)}
            />
          )}
          <p style= {{color: primaryColor}}> Primary Color: {primaryColor}</p>
          <div>
          <div>
          <p>Find Secondary Color: </p>
        </div>
          <button 
            onClick = {() => setShowColorPicker1(showColorPicker1 =>!showColorPicker1)}
            >
              {showColorPicker1 ? 'Close color picker': 'Open Secondary Color Picker'}
          </button>
          {showColorPicker1 && ( 
            <ChromePicker 
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
  
  