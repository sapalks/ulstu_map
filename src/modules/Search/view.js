import React from 'react';
import cn from 'classnames';

import Grid from 'components/Common/Grid';

import SearchIcon from 'assets/svg/search.svg';
import CrossIcon from 'assets/svg/cross.svg';

import styles from './styles.scss';

const View = ({ filter, setFilter }) => {
  const cleanIconDisplay = filter ? styles.display : null;

  return (
    <Grid className={styles.container}>
      <Grid className={styles.searchField}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Поиск 1"
          value={filter || ''}
          onChange={({ target: { value } }) => setFilter(value)}
        />
        <CrossIcon
          className={cn(styles.crossIcon, cleanIconDisplay)}
          onClick={() => setFilter(null)}
        />
      </Grid>
    </Grid>
  );
};

export default View;
