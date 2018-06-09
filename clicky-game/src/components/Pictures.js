import React, { Component } from "react";
import Card from "./Card";
import * as Yankees from "./index";
import Header from "./Header";

let allYanks;
console.log(Yankees);
Object.keys(Yankees).map(key => (allYanks = key));

const readyStatement = "Click a Box to Begin!";
const correctGuess = "You Guessed Correctly!";
const incorrectGuess = "You Guessed Incorrectly...";

class Pictures extends Component {
  state = {
    right: 0,
    guesses: [],
    highScore: 0
  };

  guessWrong = () => {
    alert("you guessed wrong");
    this.setState({ right: 0 });
    this.setState({ guesses: [] });
  };

  handleClick = event => {
    const picClicked = event.target.attributes.getNamedItem("data-id").value;
    const guesses = this.state.guesses;
    guesses.indexOf(picClicked) == -1
      ? (this.setState({ right: this.state.right + 1 }),
        console.log(this.state.right),
        guesses.push(picClicked))
      : this.guessWrong();

    this.state.right >= this.state.highScore
      ? this.setState({ highScore: this.state.highScore + 1 })
      : "";
  };

  render() {
    return (
      <div>
        <Header
          right={this.state.right}
          readyStatement={readyStatement}
          correctGuess={correctGuess}
          incorrectGuess={incorrectGuess}
          highScore={this.state.highScore}
        />
        <div className="row">
          <Card names={Object.values(Yankees)} makeGuess={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Pictures;
