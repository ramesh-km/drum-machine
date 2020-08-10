import React from 'react';
import styles from './PowerToggle.module.scss';

function PowerToggle({isPowerOn, setIsPowerOn, setDisplay}) {
  return (
    <div
      className={styles.toggle}
      onClick={() => {
        setIsPowerOn(prevState => !prevState);
        setDisplay(!isPowerOn ? 'Power ON' : 'Power OFF')
      }}
    >
      <span className={isPowerOn ? styles.on : styles.off}>ON</span>
      <span className={!isPowerOn ? styles.on : styles.off}>OFF</span>
    </div>
  );
}

export default PowerToggle;