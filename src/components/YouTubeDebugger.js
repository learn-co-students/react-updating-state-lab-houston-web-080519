import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

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
        return (
            <div>
                <button className='bitrate' onClick={() => this.setState({
                    settings: Object.assign({}, this.state.settings, {
                        bitrate: 12
                    })
                })}>
                    bitrate: {this.state.settings.bitrate}
                </button>
                <button className='resolution' onClick={() => this.setState({
                    settings: Object.assign({}, this.state.settings, {
                        video: {resolution: '720p'}
                    })
                })}>
                    video resolution: {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }

}
