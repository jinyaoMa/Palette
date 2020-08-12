import React from 'react';
import './Input.styl';
import { getImage, getImageColors } from '../helper';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.file = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.state = {
      inputStyle: {
        backgroundColor: 'white',
        backgroundImage: 'none'
      },
      placeholderStyle: {
        opacity: 1
      }
    };
  }

  render() {
    return (
      <div className="Input" style={this.state.inputStyle}>
        <div className="Input-placeholder" style={this.state.placeholderStyle}>DRAG AN IMAGE HERE</div>
        <input className="Input-file" type="file" accept="image/*" ref={this.file} onChange={this.onChange} />
      </div>
    );
  }

  onChange() {
    const file = this.file.current;
    if (file.files.length) {
      let infile = file.files[0];
      if (infile.type.startsWith('image/')) {
        this.onStart();
        let reader = new FileReader();
        reader.onload = e => {
          this.setState({
            inputStyle: {
              backgroundColor: 'black',
              backgroundImage: `url(${reader.result})`
            },
            placeholderStyle: {
              opacity: 0
            }
          });

          getImage(reader.result, imgObj => {
            const imgColors = getImageColors(imgObj);
            this.onResult(imgColors);
          });
        }
        reader.readAsDataURL(infile);
      } else {
        this.onResult(-1);
      }
    } else {
      this.onResult(-2);
    }
  }

  onStart(info) {
    if (typeof this.props.onStart === 'function') {
      this.props.onStart(info);
    }
  }

  onResult(result) {
    if (typeof this.props.onResult === 'function') {
      this.props.onResult(result);
    }
  }
}

export default Input;
