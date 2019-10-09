// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

    render() {
        return <div>
            <button className = 'bitrate' onClick = {() => {
                this.setState({
                    settings: {
                        ...this.state.settings,
                        bitrate: 12
                    }
                })
            }}> </button>
            <button className = 'resolution' onClick = {() => {
                this.setState({
                    settings: {
                        ...this.state.settings,
                        video: {
                            ...this.state.video,
                            resolution: '720p'
                        }
                    }
                })
            }}> </button> 
        </div>
    }

}

export default YouTubeDebugger