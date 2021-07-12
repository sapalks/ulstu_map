import React from 'react';

import Grid from 'components/Common/Grid';
import Map from 'modules/Map';
import Search from 'modules/Search';
import CorpusList from 'modules/CorpusList';

import styles from './styles.scss';

const View = () => (
  <Grid className={styles.container}>
    <Grid direction="col" className={styles.navContainer}>
      <Search />
      <CorpusList />
    </Grid>
    <Map />
  </Grid>
);

export default View;
