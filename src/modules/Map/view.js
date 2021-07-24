import React from 'react';
import { MapInteractionCSS } from 'react-map-interaction';

import ModalContainer from 'components/Common/ModalContainer';

import GlobalMap from 'maps/global';
import C1F0 from 'maps/c1/c1-f0';
import C1F1 from 'maps/c1/c1-f1';
import C1F2 from 'maps/c1/c1-f2';
import C1F3 from 'maps/c1/c1-f3';
import C1F4 from 'maps/c1/c1-f4';
import C2F1 from 'maps/c2/c2-f1';
import C2F2 from 'maps/c2/c2-f2';
import C2F3 from 'maps/c2/c2-f3';
import C2F4 from 'maps/c2/c2-f4';
import C3F1 from 'maps/c3/c3-f1';
import C3F2 from 'maps/c3/c3-f2';
import C3F3 from 'maps/c3/c3-f3';
import C3F4 from 'maps/c3/c3-f4';
import C4F1 from 'maps/c4/c4-f1';
import C4F2 from 'maps/c4/c4-f2';
import C4F3 from 'maps/c4/c4-f3';
import C4F4 from 'maps/c4/c4-f4';
import C5F1 from 'maps/c5/c5-f1';
import C5F2 from 'maps/c5/c5-f2';
import C5F3 from 'maps/c5/c5-f3';
import C5F4 from 'maps/c5/c5-f4';

import styles from './styles.scss';

const mapsVocabulary = {
  global: <GlobalMap />,
  'c1-f0': <C1F0 />,
  'c1-f1': <C1F1 />,
  'c1-f2': <C1F2 />,
  'c1-f3': <C1F3 />,
  'c1-f4': <C1F4 />,
  'c2-f1': <C2F1 />,
  'c2-f2': <C2F2 />,
  'c2-f3': <C2F3 />,
  'c2-f4': <C2F4 />,
  'c3-f1': <C3F1 />,
  'c3-f2': <C3F2 />,
  'c3-f3': <C3F3 />,
  'c3-f4': <C3F4 />,
  'c4-f1': <C4F1 />,
  'c4-f2': <C4F2 />,
  'c4-f3': <C4F3 />,
  'c4-f4': <C4F4 />,
  'c5-f1': <C5F1 />,
  'c5-f2': <C5F2 />,
  'c5-f3': <C5F3 />,
  'c5-f4': <C5F4 />,
};

const View = ({ mapParams, setMapParams, activeMapName, mapContainerRef, mapRef }) => (
  <div className={styles.container} ref={mapContainerRef}>
    <MapInteractionCSS value={mapParams} onChange={(value) => setMapParams(value)}>
      <div className={styles.image} ref={mapRef}>
        {mapsVocabulary[activeMapName]}
      </div>
      <ModalContainer />
    </MapInteractionCSS>
  </div>
);
export default View;
