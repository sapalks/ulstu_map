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
      <label htmlFor="searchField">
        <SearchIcon className={styles.searchIcon} />

        <input
          id="searchField"
          type="text"
          placeholder="Поиск"
          value={filter || ''}
          onChange={({ target: { value } }) => setFilter(value)}
        />
      </label>
      <button
        onClick={() => setFilter(null)}
        className={cn(styles.crossIcon, cleanIconDisplay)}
      >
        <CrossIcon />
      </button>
    </Grid>
  );
};

export default View;
