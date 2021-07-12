import React, { useEffect, useState } from 'react';

import View from './view';

import styles from './styles.scss';

const focusScale = 0.7;

const defaultMapParams = {
  scale: 0.3,
  translation: { x: 0, y: 0 },
};

const Controller = ({ globalMapData, setActiveElement, ...rest }) => {
  const [mapParams, setMapParams] = useState(defaultMapParams);

  const handler = (event) => {
    const {
      target: {
        parentElement: { id: mapElementId },
      },
    } = event;
    setActiveElement(mapElementId);
    setMapParams({
      ...mapParams,
      scale: focusScale,
    });
  };

  const addClickListener = (mapData) => {
    Object.keys(mapData).forEach((element) => {
      const mapElement = document.getElementById(element);
      if (!mapElement) {
        return null;
      }

      mapElement.addEventListener('click', handler);
      mapElement.classList.add(styles.interactiveObject);
    });
  };

  const removeClickListener = (mapData) => {
    Object.keys(mapData).forEach((element) => {
      const mapElement = document.getElementById(element);
      mapElement.removeEventListener('click', handler);
    });
  };

  useEffect(() => {
    if (!globalMapData) {
      return null;
    }

    addClickListener(globalMapData);

    return () => {
      removeClickListener(globalMapData);
    };
  }, [globalMapData]);

  return <View {...rest} mapParams={mapParams} setMapParams={setMapParams} />;
};

export default Controller;
