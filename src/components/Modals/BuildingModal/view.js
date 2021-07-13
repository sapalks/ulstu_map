import React from 'react';

import EnterIcon from 'assets/svg/enter.svg';

import styles from './styles.scss';

const View = ({ element, setActiveMapName, setActiveElement }) => {
  const { name, disc, direction } = element;

  return (
    <div className={styles.container} title={`Перейти в ${name}`}>
      <span className={styles.title}>{name}</span>
      <span className={styles.disc}>{disc}</span>
      <EnterIcon
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
