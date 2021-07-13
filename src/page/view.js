import React from 'react';

import Grid from 'components/Common/Grid';
import ModalContainer from 'components/Common/ModalContainer';
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
    <ModalContainer />
  </Grid>
);

export default View;
