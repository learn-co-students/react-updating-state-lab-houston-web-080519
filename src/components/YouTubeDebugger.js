// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {


    state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
          
    changeSettings = () => {
       
        this.setState({
            settings: {...this.state.settings,bitrate: 12}
        
        })
                //this.state.settings.bitrate
            
        //     {
        //     errors: [],
        //     user: null,
        //     settings: {
        //       bitrate: 12,
        //       video: {
        //         resolution: this.state.settings.video.resolution
        //       }
        //     }
        //     //settings: this.state.settings.bitrate = 12
        // }
        
    }

    changeResolution = () => {
        this.setState({
            errors: [],
            user: null,
            settings: {
              bitrate: this.state.settings.bitrate,
              video: {
                resolution: '720p'
              }
            }
            
            //settings: this.state.settings.video.resolution = '720p'
        },console.log(this.state.settings))
    }
    
    
    render(){
         return(
             <div>
            <button className='bitrate' onClick={this.changeSettings}>
                 BITRATE      
            </button>
                    
            <br></br>

            <button className='resolution' onClick={this.changeResolution}>
                 RESOLUTION
            </button>
            </div>
                )
            }


}

export default YouTubeDebugger;