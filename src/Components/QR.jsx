import React from 'react';
import { useState } from 'react';
var QRCode = require('qrcode.react');

export default class QR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restid: 1234,
      tables:5,
      codes: []
    }
  }

  render () {
    for(var i = 0; i < 5; i++){
      this.state.codes.push(`https://autogarcon.live/api/restaurant/${this.state.restid}/table/${i}/sitdown`)
    }
    console.log(this.state.codes);
    return (
      <div className="QR">
        <h1>Generate Table QR Codes</h1>
        
        <ul>
          {this.state.codes.map(code => {
            return (<li><QRCode value={code} /></li>)
          })}
        </ul>
        
    </div>
  );
  }
  
}
