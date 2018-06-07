import React, { Component } from "react";
import Card from "./Card";
import * as Yankees from "./index";

console.log(Yankees);
Object.keys(Yankees).map(key => console.log(key));

class Pictures extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <Card names={Object.values(Yankees)} />
      </div>
    );
  }
}

export default Pictures;
