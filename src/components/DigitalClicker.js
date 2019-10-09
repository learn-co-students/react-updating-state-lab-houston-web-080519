import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  render() {
    const { timesClicked } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              timesClicked: timesClicked + 1
            });
          }}
        >
          {this.state.timesClicked}
        </button>
      </div>
    );
  }
}
