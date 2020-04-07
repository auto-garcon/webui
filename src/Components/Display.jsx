
import React from 'react'
import { SketchPicker } from 'react-color'
import ImageUpload from './ImageUpload'
function Display() {

    
    return (


      <div className="display">
        <header className="display-header">
          <h1><strong>Display</strong></h1>
          </header>
          <p for="avatar">Choose an image for the restauarant logo</p>

          <input type="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg">
          </input>
          <br></br>
          <div>
          <br></br>
          Pick yo restaurant colors
          </div>
          <br></br>
          <SketchPicker />
          <SketchPicker />
          <SketchPicker />
        
      
        </div>

      
    );
  }
  export default Display;