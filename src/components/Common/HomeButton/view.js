import React from 'react';

import styles from './styles.scss';

const View = ({ mapName, setActiveMapName }) => {
  if (mapName === 'global') {
    return null;
  }

  return (
    <button className={styles.button} onClick={() => setActiveMapName('global')}>
      На общую карту
    </button>
  );
};

export default View;
