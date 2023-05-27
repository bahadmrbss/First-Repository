import React, { Component } from "react";

export default class ChildComp extends Component {
  // Created by "rconst" snippet
  constructor(props) {
    super();
    console.log("Child-Constructor runned.");
  }

  componentWillMount() {
    console.log("Child-componentWillMount runned.");
  }

  componentDidMount() {
    console.log("Child-componenDidMount runned.");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Child-componentWillReceiveProps runned.New data:", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return nextState.count % 10 === 0;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Child-componentWillUpdate runned.");
  }

  // CReated by "cdup" snippet
  componentDidUpdate(prevProps, prevState)
  { console.log("Child-componentDidUpdate runned.");
  console.log("prevProps-prevState:",prevProps,prevState)}

  componentWillUnmount(){
    console.log("Child-componentWillUnmount runned.")
  }

  state = { count: 0 };
  changeCount = (e) => {
    this.setState({ count: e.target.value });
  };
  render() {
    console.log("Child-Rendered.");
    return (
      <div>
        ChildComp
        <hr />
        <h5>{this.props.newname}</h5>
        <button onClick={this.props.changeName}>Change The Name</button>
        <hr />
        {this.state.count}/10 = {this.state.count / 10}
        <br />
        <input
          name="newcount"
          id="newcount"
          onChange={this.changeCount}
        ></input>
      </div>
    );
  }
}
