import React, { Component } from "react";

class Smoker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  onChange(event) {
    console.log(event.target.value);
    this.props.onChange(this.state.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="range">
        <input
          type="text"
          name="smoker"
          defaultValue={this.state.smoker}
          onChange={this.change}
        />
      </div>
    );
  }
}

export default Smoker;
