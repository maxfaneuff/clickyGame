import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Pictures from "./components/Pictures";
import Pinstripes from "../src/images/pinstripes.png";

class App extends Component {
  styles = {
    body: {
      backgroundImage: `url(${Pinstripes})`
    }
  };
  render() {
    return (
      <div className="App" style={this.styles.body}>
        <Pictures />
      </div>
    );
  }
}

export default App;
