import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Pictures from "./components/Pictures";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pictures />
      </div>
    );
  }
}

export default App;
