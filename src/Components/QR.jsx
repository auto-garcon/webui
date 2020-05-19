/*This component is the qr generator. this will dynamically encode QR codes and display them to the user based on how many 
tables they have. It stores the restaurant id and the table id which is received from the back end.
*/
import React from 'react';
import { useState } from 'react';
var QRCode = require('qrcode.react');

export default class QR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user:this.props.user,
      tables: this.props.tables,
      codes: []
    }
  }

  render () {
    console.log("hello")
    for(var i = 0; i < this.state.tables; i++){
      this.state.codes.push(`https://autogarcon.live/api/restaurant/${this.state.user.restaurantID}/table/${i}/sitdown`)
    }
    
    return (
      <div className="QR">
        <h1 style= {{color: "#edf2f4"}}>Generated QR Codes</h1>
        
        <ul>
          {this.state.codes.map(code => {
            return (<li><QRCode value={code} /></li>)
          })}
        </ul>
        
      </div>
    );
  }
  
}
