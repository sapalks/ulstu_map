import React from 'react';

import Grid from 'components/Common/Grid';
import HomeButton from 'components/Common/HomeButton';
import Map from 'modules/Map';
import Search from 'modules/Search';
import CorpusList from 'modules/CorpusList';

import styles from './styles.scss';

const View = () => (
  <Grid className={styles.container}>
    <HomeButton />
    <Grid direction="col" className={styles.navContainer} id="corpusList">
      <Search />
      <CorpusList />
    </Grid>
    <Map />
  </Grid>
);
export default View;
