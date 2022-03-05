import React, { Component } from "react";
class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div>name:{this.state.name}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          clicked :{this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
