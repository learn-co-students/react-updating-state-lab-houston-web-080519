import React from 'react';

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    clickCounter = () => {
        console.log('timesClicked is', this.timesClicked)

    }

    counter = () => {
        this.setState(() => ({
            timesClicked: this.state.timesClicked + 1
        }));
    }

    render() {
        return <button onClick = {() => this.counter() }>{this.state.timesClicked}</button>;  
    }
}

export default DigitalClicker;