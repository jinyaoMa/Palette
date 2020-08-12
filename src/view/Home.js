import React from 'react';
import './Home.styl';
import Loading from "../component/Loading";
import Input from "../component/Input";
import Output from "../component/Output";
import Color from "../component/Color";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      isLoading: false,
      hasOutput: false
    };
    this.onStart = this.onStart.bind(this);
    this.onResult = this.onResult.bind(this);
  }

  render() {
    return (
      <div className="Home">
        <Input onStart={this.onStart} onResult={this.onResult} />
        <Output active={this.state.hasOutput} result={this.state.result} />
        <Loading active={this.state.isLoading} />
      </div>
    );
  }

  renderColor(result) {
    return result.map((color, i) => (
      <Color color={color.toString()} key={i} />
    ));
  }

  onStart() {
    this.setState({ isLoading: true });
  }

  onResult(result) {
    if (result instanceof Array && result.length) {
      this.setState({
        result: this.renderColor(result),
        isLoading: false,
        hasOutput: true
      });
    } else {
      this.setState({
        result: [],
        isLoading: false,
        hasOutput: false
      });
    }
  }
}

export default Home;
