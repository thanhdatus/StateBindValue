import React, { Component } from 'react';
import '../App.css';

class InputItem extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Binding value</h2>
        <p id='binding-block'>{'Hello ' + this.state.value} </p>
        <input
          id='typing-area'
          type='text'
          value={this.state.value}
          placeholder='Nhap ten cua ban'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputItem;
