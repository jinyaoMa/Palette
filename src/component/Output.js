import React from 'react';
import './Output.styl';

class Output extends React.Component {
  render() {
    return (
      <div className={`Output ${this.isActive()}`}>{this.props.result}</div>
    );
  }

  isActive() {
    return this.props.active ? 'active' : '';
  }
}

export default Output;
