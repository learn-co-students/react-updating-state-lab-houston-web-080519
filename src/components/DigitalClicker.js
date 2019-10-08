import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor() {
        super()
    
        this.state = {
            timesClicked: 0
        }
    }

    handleEvent = () => {
        this.setState(prevState => ({
          timesClicked: prevState.timesClicked+1
        }))
      }
      
    render() {
        return (
            <div>
             <button onClick={this.handleEvent}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
