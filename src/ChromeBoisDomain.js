import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  resizeHandler = (event) => {
    if(event.key === 'a') {
      resize('+')
    } else if(event.key === 's') {
      resize('-')
    }
  }
  
  
  render() {
    return (
      <canvas
        onKeyDown={this.resizeHandler}
        onClick={toggleCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
