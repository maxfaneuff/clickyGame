import React, { Component } from "react";
import Card from "./Card";
import * as Yankees from "./index";
import Header from "./Header";
import Pinstripes from "../images/pinstripes.png";

const allYanks = Object.values(Yankees);
console.log(allYanks);

class Pictures extends Component {
  state = {
    right: 0,
    guesses: [],
    highScore: 0,
    headerMsg: "Click a Box to Begin",
    hovered: false,
    transform: "scale(1.0)"
  };

  styles = {
    transform: {
      transform: `${this.state.transform}`
    }
  };

  onMouseOver = event => {
    this.setState({ hovered: true, transform: "scale(1.15)" });
    const thisImg = event.target;
    // this.styles.rollOver();
    console.log(this.state.transform);
  };

  onMouseOut = event => {
    this.setState({ hovered: false, transform: "scale(1.0)" });
    const thisImg = event.target;
    console.log(this.state.transform);
  };

  shuffleCards = () => {
    for (let i = 0; i < allYanks.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (allYanks.length - i));

      let temp = allYanks[j];
      allYanks[j] = allYanks[i];
      allYanks[i] = temp;
    }
  };

  guessWrong = () => {
    const emptyArr = [];
    this.setState({
      right: 0,
      guesses: emptyArr,
      headerMsg: "That's Incorrect..."
    });
    setTimeout(() => {
      this.setState({ headerMsg: "Click a Box to Begin" });
    }, 2000);
    console.log(this.state.guesses);
  };

  guessRight = () => {
    this.setState({
      right: this.state.right + 1,
      headerMsg: "That's Correct!"
    });
    this.state.right >= this.state.highScore
      ? this.setState({
          highScore: this.state.highScore + 1
        })
      : "";
  };

  handleClick = event => {
    const picClicked = event.target.attributes.getNamedItem("src").value;
    const guesses = this.state.guesses;
    console.log(guesses);
    guesses.indexOf(picClicked) == -1
      ? (this.setState({ right: this.state.right + 1 }),
        console.log(this.state.right),
        guesses.push(picClicked),
        console.log(guesses),
        this.guessRight())
      : this.guessWrong();

    this.shuffleCards();
  };

  render() {
    return (
      <div>
        <Header
          right={this.state.right}
          highScore={this.state.highScore}
          headerMsg={this.state.headerMsg}
        />
        <div className="row">
          <Card
            style={this.styles.transform}
            names={allYanks}
            makeGuess={this.handleClick}
            mouseOver={this.onMouseOver}
            mouseOut={this.onMouseOut}
            hover={this.state.transform}
          />
        </div>
      </div>
    );
  }
}

export default Pictures;
