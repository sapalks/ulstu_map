import React from 'react';
import { MapInteractionCSS } from 'react-map-interaction';

import GlobalMap from 'maps/global';
import Map2 from 'maps/map2';

import styles from './styles.scss';

const mapsVocabulary = {
  global: <GlobalMap />,
  map2: <Map2 />,
};

const View = ({ mapParams, setMapParams, activeMapName }) => (
  <div className={styles.container}>
    <MapInteractionCSS value={mapParams} onChange={(value) => setMapParams(value)}>
      {mapsVocabulary[activeMapName]}
    </MapInteractionCSS>
  </div>
);

export default View;
