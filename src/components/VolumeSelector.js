import React from 'react';

function VolumeSelector({setDisplay, setVolume, volume}) {
  return (
    <div>
      <label htmlFor='volume'><span role='img' aria-label='volume icon'>🔊</span></label>
      <input
        type='range'
        id='volume'
        name='volume'
        min='0'
        max='100'
        step='0'
        value={volume}
        onChange={e => {
          setDisplay('Volume ' + e.target.value);
          setVolume(e.target.value);
        }}
      />
    </div>
  )
}

export default VolumeSelector;