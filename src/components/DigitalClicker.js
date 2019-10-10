import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }

    x = this.state.timesClicked

    render() {
        return (
            <button onClick={()=> this.setState({timesClicked: ++this.x})}>
                {this.state.timesClicked}
            </button>
        )
    }

}

