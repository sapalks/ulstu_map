import React from 'react';
import { MapInteractionCSS } from 'react-map-interaction';

import GlobalMap from 'maps/global';

import styles from './styles.scss';

const View = ({ mapParams, setMapParams }) => (
  <div className={styles.container}>
    <MapInteractionCSS value={mapParams} onChange={(value) => setMapParams(value)}>
      <GlobalMap />
    </MapInteractionCSS>
  </div>
);

export default View;
