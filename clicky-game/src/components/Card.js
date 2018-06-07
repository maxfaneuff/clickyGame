import React from "react";
import * as Yankees from "./index";

let Yanks;

const styles = {
  cards: {
    borderStyle: "solid",
    borderColor: "#0C2340",
    borderWidth: "5px",
    padding: 10,
    height: 200,
    width: 200,
    margin: 5
  },
  grid: {
    position: "relative",
    margin: 20
  }
};

const Card = props => (
  <div className="col-md-12 col-sm-12" style={styles.grid}>
    <div className="row">
      {props.names.map((key, index) => (
        <div className="col-md-3" align="center">
          <img
            style={styles.cards}
            className="card-image-top"
            src={key}
            alt="yankeePic"
            key={index}
          />
        </div>
      ))}{" "}
    </div>
  </div>
);

export default Card;
