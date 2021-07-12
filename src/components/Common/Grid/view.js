import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

const directionStyles = {
  row: styles.row,
  col: styles.column,
};

const View = ({ className, direction = 'row', children }) => {
  const directionClass = directionStyles[direction];

  return <div className={cn(styles.grid, className, directionClass)}>{children}</div>;
};

export default View;
