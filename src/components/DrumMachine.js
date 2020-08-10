import React, { useState } from 'react';
import DrumPad from './DrumPad';
import PowerToggle from './PowerToggle';
import VolumeSelector from './VolumeSelector';
import SOUNDS from '../sounds';

function DrumMachine(params) {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [display, setDisplay] = useState('music 🎶');
  const [volume, setVolume] = useState(70);

  const renderedDrumPads = SOUNDS.map(sound => (
    <DrumPad
      key={sound.key}
      sound={sound}
      isPowerOn={isPowerOn}
      setDisplay={setDisplay}
      volume={volume}
    />
  ));

  return (
    <div id='drum-machine'>
      <div className='drumPads'>{renderedDrumPads}</div>
      <div className='drumMachineControls'>
        <PowerToggle isPowerOn={isPowerOn} setIsPowerOn={setIsPowerOn} setDisplay={setDisplay} />
        <div id='display'>{isPowerOn ? display : 'Power OFF'}</div>
        <VolumeSelector setDisplay={setDisplay}setVolume={setVolume} volume={volume}/>
      </div>
    </div>
  );
}

export default DrumMachine;