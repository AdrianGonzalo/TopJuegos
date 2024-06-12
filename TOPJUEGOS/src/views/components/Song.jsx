import React from 'react';
import './Song.css'

function Song(){
  return <div className="AllSong">
      <audio className='Song'
        controls
        src="/assets/soundtrack/BaldursGateRaphael.mp3"
      /> 
    </div> 

}

export default Song