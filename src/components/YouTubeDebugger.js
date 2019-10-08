import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }  
        }
    }

    changeBitrate = () => {
        this.setState(({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    )
    console.log(this.state.settings.bitrate)
    }
    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
        console.log(this.state.settings.video.resolution)
    }
    
    render() {
        return (
            <div>
             <button className='bitrate' onClick={this.changeBitrate}>Bitrate Button</button>
             <button className='resolution' onClick={this.changeResolution}>Resolution Button</button>
            </div>
        )
    }
}

export default YouTubeDebugger
