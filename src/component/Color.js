import React from 'react';
import './Color.styl';

class Color extends React.Component {
  render() {
    return (
      <div className="Color">
        <span className="Color-color" style={{ background: this.props.color || '#ffffff' }}></span>
        <span className="Color-name">{this.props.color || '#ffffff'}</span>
      </div>
    );
  }
}

export default Color;
