import React, { Component } from "react";
import "./App.css";
import Range from "./Components/Range";
import Output from "./Components/Output";
import Smoker from "./Components/Smoker";
import DatePicker from "./Components/DatePicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smoker: "No",
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: "Normal"
    };
  }

  heightChange(height) {
    this.setState({ height: height }, this.setBmi);
  }

  weightChange(weight) {
    this.setState({ weight: weight }, this.setBmi);
  }

  setBmi() {
    let bmi = (
      (this.state.weight / this.state.height / this.state.height) *
      10000
    ).toFixed(2);
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) }, function() {
      // console.log(this.state);
    });
  }

  getBmiClass(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30) return "Obese";
  }
  render() {
    return (
      <div className="App">
        <h1>Your Life Insurance Quote</h1>
        <form>
          <div>
            <label>Date of Birth? </label>
            <DatePicker />
            <br />
            <br />
          </div>
          <div>
            <label>Are you a smoker?</label>
            <Smoker />
            <br />
            <label>Your Height? (cm)</label>
            <Range
              value={this.state.height}
              onChange={this.heightChange.bind(this)}
            />
          </div>
          <div>
            <label>Your Weight? (kilos)</label>
            <Range
              value={this.state.weight}
              onChange={this.weightChange.bind(this)}
            />
          </div>
        </form>
        <br />
        <br />
        <Output data={this.state} />
      </div>
    );
  }
}

export default App;
