import React, { useEffect, useState, useRef } from 'react';

import View from './view';

import styles from './styles.scss';

const defaultScale = 0.4;
const focusScale = 0.7;

const defaultMapParams = {
  scale: defaultScale,
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

const getMapElementPos = (
  mapElement,
  { clientWidth: mapContainerWidth, clientHeight: mapContainerHeight },
) => {
  if (!mapElement) {
    return null;
  }

  const { id: elementId } = mapElement;
  const element = document.getElementById(elementId).getBoundingClientRect();

  const x = mapContainerWidth / 2 - element.left;
  const y = mapContainerHeight / 2 - element.top;
  const position = { x, y };

  return position;
};

const getLeftSpace = ({ clientWidth: containerWidth }, { width: mapWidth }) => {
  const leftSpace = containerWidth / 2 - mapWidth / 2;

  return leftSpace;
};

const Controller = ({
  mapData,
  setActiveElement,
  directedElementId,
  activeMapName,
  activeMapElement,
  ...rest
}) => {
  const [mapParams, setMapParams] = useState(defaultMapParams);
  const mapContainerRef = useRef(null);

  const handler = (event) => {
    const {
      target: {
        parentElement: { id: mapElementId },
      },
    } = event;
    setMapParams({ ...mapParams, scale: focusScale });
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

  useEffect(() => {
    if (!mapContainerRef.current) {
      return null;
    }

    const elementPos = getMapElementPos(activeMapElement, mapContainerRef.current);
    console.log(elementPos);
    setMapParams({
      ...mapParams,
      translation: { ...elementPos },
    });
  }, [mapContainerRef, activeMapElement]);

  useEffect(() => {
    const mapImage = document.getElementsByClassName(styles.image)[0].getBoundingClientRect();
    if (!mapContainerRef.current || !mapImage) {
      return null;
    }
    const leftSpace = getLeftSpace(mapContainerRef.current, mapImage);

    setMapParams({
      ...mapParams,
      translation: { x: leftSpace, y: mapParams.translation.y },
    });
  }, [mapContainerRef]);

  return (
    <View
      {...rest}
      mapParams={mapParams}
      setMapParams={setMapParams}
      activeMapName={activeMapName}
      mapContainerRef={mapContainerRef}
    />
  );
};

export default Controller;
