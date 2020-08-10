import React, { useRef, useEffect } from 'react';

function DrumPad({sound, isPowerOn, setDisplay, volume}) {
  const audioRef = useRef(null);

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key.toLocaleLowerCase() === sound.key.toLocaleLowerCase()) {
        document.getElementById(sound.key).click();
      }
    });
  });

  function clickHandler(e) {
    setDisplay(sound.name);
    audioRef.current.src = sound.url;
    document.querySelector(`.drum-pad.${sound.key}`).animate([
      {
        backgroundColor: 'orange',
        transform: 'scale(0.95)'
      },
      {
        backgroundColor: 'blue',
        transform: 'scale(1)'
      }
    ], {
      duration: 700
    });
  }

  return (    
    <div className={`drum-pad ${sound.key}`}
      onClick={clickHandler}
      id={sound.name}
    >
      <audio
        ref={audioRef}
        src='#'
        id={sound.key}
        className='clip'
        autoPlay={isPowerOn}
        onEnded={(e) => e.target.src = '#'}
        onLoadStart={e => e.target.volume = volume / 100}
      />{sound.key}
    </div>
  );
}

export default DrumPad;