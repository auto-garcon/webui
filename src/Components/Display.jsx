/*This is the display component which is part of settings. 
This is where the user can customize the display of the ui and android app
including adding their own logo, colors, and fonts*/


import React, {useState} from 'react'
import {ChromePicker} from 'react-color'
import { ImagePicker } from 'react-file-picker'


function Display() {
    const [color, setColor] = useState('#fff')
    const [showColorPicker,setShowColorPicker]= useState(false)

    const [color1, setColor1] = useState('#fff')
    const [showColorPicker1,setShowColorPicker1]= useState(false)
    const MyComponent = () => (
      <ImagePicker
        extensions={['jpg', 'jpeg', 'png']}
        dims={{minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500}}
    
      >
        <button>
          Click to upload image
        </button>
      </ImagePicker>
    )


    return (
      <div >
        <h1>Display</h1>
        <p style= {{color: "#edf2f4"}}> Choose the Restaurant Logo</p>
        <MyComponent/>
        <p>Pick your two restaurant colors</p>
          <button 
            onClick = {() => setShowColorPicker(showColorPicker =>!showColorPicker)}
            >
              {showColorPicker ? 'Close color picker': 'Pick a color'}
          </button>
          {showColorPicker && ( 
            <ChromePicker 
              color ={color} 
              onChange={updatedColor => setColor(updatedColor.hex)}
            />
          )}
          <p style= {{color: "#edf2f4"}}> You picked color {color}</p>
          <div>
          <button 
            onClick = {() => setShowColorPicker1(showColorPicker1 =>!showColorPicker1)}
            >
              {showColorPicker1 ? 'Close color picker': 'Pick a color'}
          </button>
          {showColorPicker1 && ( 
            <ChromePicker 
              color ={color1} 
              onChange={updatedColor => setColor1(updatedColor.hex)}
            />
          )}
          <p style= {{color: "#edf2f4"}}> You picked color {color1}</p>
          </div>
        </div>

      
    );
  }
  export default Display;