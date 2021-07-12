import React from 'react';

import Grid from 'components/Common/Grid';

import SearchIcon from 'assets/svg/search.svg';
import CrossIcon from 'assets/svg/cross.svg';

import styles from './styles.scss';

const View = () => (
  <Grid className={styles.container}>
    <Grid className={styles.searchField}>
      <SearchIcon className={styles.searchIcon} />
      <input type="text" placeholder="Поиск" />
      <CrossIcon className={styles.crossIcon} />
    </Grid>
  </Grid>
);

export default View;
