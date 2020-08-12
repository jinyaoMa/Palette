import React from 'react';
import './Loading.styl';

class Loading extends React.Component {
  render() {
    return (
      <div className={`Loading ${this.isActive()}`}>
        Processing...
      </div>
    );
  }

  isActive() {
    return this.props.active ? 'active' : '';
  }
}

export default Loading;
