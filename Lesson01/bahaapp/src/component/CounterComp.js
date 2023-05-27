import React, { Component } from "react";

export default class CounterComp extends Component {
    state={number:0}
    incrementState=()=>{this.setState({number:this.state.number+1})}
    decrementState=()=>{this.setState({number:this.state.number-1})}
  render() {
    return (
      <div>
        CounterComp
        <hr/>
        Counter : {this.state.number} <br/>
        <button onclick={this.decrementState}>-</button>
        <button onclick={this.incrementState} 
        style={{marginleft:"5px"}}>+</button>
      </div>
    );
  }
}
