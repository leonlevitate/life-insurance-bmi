import React, { Component } from "react";

class Output extends Component {
  render() {
    let height = this.props.data.height;
    let weight = this.props.data.weight;
    let bmi = this.props.data.bmi;
    // let bmiClass = this.props.data.bmiClass;
    return (
      <div className="output">
        <h3>{height} cm</h3>
        <h3>{weight} kilos</h3>
        <h3>Your BMI is: {bmi}</h3>
        {/* <h3>You are considered: {bmiClass}</h3> */}
      </div>
    );
  }
}

export default Output;
