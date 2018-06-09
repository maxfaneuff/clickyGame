import React from "react";

const styles = {
  heading: {
    background: "#0C2340",
    color: "white",
    padding: 15,
    shadowOpacity: "20%",
    boxShadow: "10px 5px 5px black"
  }
};

const Header = props => (
  <div className="page-header" style={styles.heading}>
    <div className="row">
      <h1 className="col-md-4">
        <strong>Click a Box to Begin!</strong>
      </h1>
      <h1 className="col-md-4">Click an Image to Begin!</h1>
      <h2 className="col-md-4 scoreBug">
        Right Guesses: {props.right} | High Score: {props.highScore}
      </h2>
    </div>
  </div>
);

export default Header;
