import React from 'react';
import SongItem from './SongItem';
import './SongList.css';


const SongList = ({tunes}) => {
  const songItems = tunes.map((tune, index) => {
    return (
      <SongItem
      tune={tune}
      key = {index}>
      {index + 1}
      </SongItem>
    );
  });

  return (
    <div className='top-twenty-results'>
    {songItems}
    </div>
  )
}

export default SongList;
