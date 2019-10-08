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

    bitrateTwelve = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
        console.log('Bitrate:', this.state.settings.bitrate)
    }

    resolutionSevenTwenty = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        });
        console.log('Resolution:', this.state.settings.video.resolution)
    }

    render() {
        console.log('Bitrate:', this.state.settings.bitrate)
        console.log('Resolution:', this.state.settings.video.resolution)
        return (
            <div>
                <button className='bitrate' onClick = {() => this.bitrateTwelve()}>Change bitrate to 12</button>
                <button className='resolution' onClick = {() => this.resolutionSevenTwenty()}>Change resolution to 720p</button>
            </div>
        );
    }
    
}

export default YouTubeDebugger