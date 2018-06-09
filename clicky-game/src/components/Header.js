import React from "react";

const styles = {
  heading: {
    background: "#0C2340",
    color: "white",
    padding: 15,
    shadowOpacity: "20%",
    boxShadow: "10px 5px 5px black"
  },
  title: {
    textAlign: "center"
  }
};

const Header = props => (
  <div className="page-header" style={styles.heading}>
    <div className="row">
      <h1 className="col-md-4">
        <strong>The NYY Clicky Game!</strong>
      </h1>
      <h1 className="col-md-4" style={styles.title}>
        {props.headerMsg}
      </h1>
      <h2 className="col-md-4 scoreBug" style={styles.title}>
        Right Guesses: {props.right} | High Score: {props.highScore}
      </h2>
    </div>
  </div>
);

export default Header;
