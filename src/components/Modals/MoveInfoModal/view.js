import React from 'react';

import MoveButton from 'components/Common/MoveButton';

import styles from './styles.scss';

const View = ({ element, setActiveMapName, setActiveElement }) => {
  const { name, disc, direction } = element;

  return (
    <div className={styles.container} title={`Перейти в ${name}`}>
      <span className={styles.title}>{name}</span>
      <span className={styles.disc}>{disc}</span>
      <MoveButton
        className={styles.enterIcon}
        onClick={() => {
          setActiveMapName(direction);
          setActiveElement(null);
        }}
      />
    </div>
  );
};

export default View;
