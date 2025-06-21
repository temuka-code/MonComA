import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/How-to-use-interview-coder.mp4'

const VideoPlayer = ({playState,setPlaySate}) => {
    const player=useRef(null);

    const closePlayer =(e)=>{
        if(e.target === player.current){
            setPlaySate(false);
        }
    }

  return (
    <div className={`video-player ${playState? ' ':'hide'}`} ref={player}  onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>

    </div>
  )
}

export default VideoPlayer