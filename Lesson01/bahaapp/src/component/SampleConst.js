import React, { Component } from "react";

export default class SampleConst extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("Run Consturctor");
    console.log("Porops::", props);
    console.log("Props 01::", props.value1);
  }
  render() {
    return  <div style={{ bordeer: "1px solid green" }}>
        <h1 style={{ color: "red" }}>New Companent</h1>
        <h2 style={{ color: "yellow" }}>Sub Title</h2>
        <h3 style={{ border:"1px dotted red", "marginLeft":"40px" }}>Sub Sub Title</h3>
      </div>;
  }
}
