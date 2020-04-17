import React from 'react';

var QRCode = require('qrcode.react');

//var Link = require('react-router-dom').Link
function QR(props) {
  const {QRImages} = props;
  return (
    <div className="QR">
   
    

        <h1>Generate Table QR Codes</h1>
      
        <p>Enter the number of tables</p>
        <input type="number" step="1" pattern="\d+" id="tables" />
        <button type="button" onclick="getInputValue();">submit</button> 
          

    
        <QRCode value="http://facebook.github.io/react/" />
         

    </div>
        

    
  );
}

export default QR;