import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./logo.gif";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Graduation Countdown</h2>
        </div>
        <Countdown date={`${year}-06-22T12:00:00`} />
      </div>
    );
  }
}

export default App;
