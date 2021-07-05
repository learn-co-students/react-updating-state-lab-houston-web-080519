// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }
    render() {
            return <div>
                <label>{"Digital Clicker"}</label><button label = {this.state.timesClicked} onClick = {() => {
                    console.log("click")
                    this.setState({
                        timesClicked: this.state.timesClicked + 1
                    })
                } }>{this.state.timesClicked}</button>
                </div>
        
    }
}

export default DigitalClicker