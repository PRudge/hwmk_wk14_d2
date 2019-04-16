import React from 'react';
import './SongItem.css';

const SongItem = (props) => {
  return (
    <div className = "song-item-div">
      <img className= "image" src = {props.tune['im:image'][2]['label']} />
      <p className = "position">{props.children}. {props.tune['im:name'].label}</p>
    <p className = "artist">{props.tune['im:artist'].label}</p>
    <p><audio
        controls
        src={props.tune['link'][1]['attributes']['href']}>
            Your browser does not support the
            <code>audio</code> element.
    </audio></p>
    </div>
  )

}

export default SongItem;
