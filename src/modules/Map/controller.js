import React, { useState, useEffect, useRef } from 'react';

import View from './view';

import styles from './styles.scss';

const defaultScale = 0.4;
const focusScale = 0.45;
const searchContainerWidth = 250;

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

const getMapParamsOnActive = ({
  mapElement,
  mapContainer: { clientWidth: mapWidth, clientHeight: mapHeight },
  mapParams: {
    translation: { x: mapX, y: mapY },
  },
}) => {
  if (!mapElement) {
    return defaultMapParams;
  }
  const { id: elementId } = mapElement;
  const { left, top } = document.getElementById(elementId).getBoundingClientRect();
  const { width } = document.getElementById(elementId).getBBox();

  const x = mapX - left + searchContainerWidth + mapWidth / 2 - (width / 2) * focusScale;
  const y = mapY - top + mapHeight / 2;

  return {
    scale: focusScale,
    translation: { x: x <= 150 ? x : 0, y: y <= 150 ? y : 0 },
  };
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
  setMapScale,
  ...rest
}) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
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
    setMapScale(mapParams.scale);
  }, [mapParams.scale]);

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

    setMapParams({ ...mapParams, scale: focusScale });
    const activeMapParams = getMapParamsOnActive({
      mapElement: activeMapElement,
      mapContainer: mapContainerRef.current,
      mapParams,
    });

    setMapParams({ ...activeMapParams });
  }, [mapContainerRef, activeMapElement, mapRef]);

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
      mapRef={mapRef}
    />
  );
};

export default Controller;
