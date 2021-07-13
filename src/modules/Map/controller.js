import React, { useEffect, useState } from 'react';

import View from './view';

import styles from './styles.scss';

const focusScale = 0.7;

const defaultMapParams = {
  scale: 0.3,
  translation: { x: 0, y: 0 },
};

const setDirectedElement = (mapData, directedElementId) => {
  Object.values(mapData).forEach(({ id }) => {
    if (id === directedElementId) {
      const element = document.getElementById(id);
      element.classList.add(styles.directed);
    } else {
      const element = document.getElementById(id);
      element.classList.remove(styles.directed);
    }
  });
};

const Controller = ({ mapData, setActiveElement, directedElementId, activeMapName, ...rest }) => {
  const [mapParams, setMapParams] = useState(defaultMapParams);

  const handler = (event) => {
    const {
      target: {
        parentElement: { id: mapElementId },
      },
    } = event;
    setActiveElement(mapElementId);
  };

  useEffect(() => {
    if (!mapData) {
      return null;
    }

    setDirectedElement(mapData, directedElementId);
    Object.keys(mapData).forEach((element) => {
      const mapElement = document.getElementById(element);
      if (!mapElement) {
        return null;
      }

      mapElement.addEventListener('click', handler);
      mapElement.classList.add(styles.interactiveObject);
    });

    return () => {
      Object.keys(mapData).forEach((element) => {
        const mapElement = document.getElementById(element);
        if (!mapElement) {
          return null;
        }

        mapElement.removeEventListener('click', handler);
      });
    };
  }, [mapData, directedElementId, activeMapName]);

  return (
    <View
      {...rest}
      mapParams={mapParams}
      setMapParams={setMapParams}
      activeMapName={activeMapName}
    />
  );
};

export default Controller;
