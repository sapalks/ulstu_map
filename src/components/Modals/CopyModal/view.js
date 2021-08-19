import React from 'react';

import styles from './styles.scss';

const View = ({ message, isOpen }) => (
  <div className={styles.container} style={{ opacity: isOpen ? 1 : 0 }}>
    <span className={styles.message}>{message}</span>
  </div>
);
export default View;
