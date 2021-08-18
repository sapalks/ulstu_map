import React, { useEffect } from 'react';

import CrossIcon from 'assets/svg/cross.svg';
import MoveInfoModal from 'components/Modals/MoveInfoModal';
import InfoModal from 'components/Modals/InfoModal';
import MoveModal from 'components/Modals/MoveModal';
import AuditoryModal from 'components/Modals/AuditoryModal';

import styles from './styles.scss';

const focusScale = 0.45;
const searchContainerWidth = 350;

const getModalContent = (activeElement) => {
  const { action } = activeElement;

  if (action === 'move_info') {
    return <MoveInfoModal element={activeElement} />;
  }

  if (action === 'move') {
    return <MoveModal element={activeElement} />;
  }

  if (action === 'info') {
    return <InfoModal element={activeElement} />;
  }

  if (action === 'auditory') {
    return <AuditoryModal element={activeElement} />;
  }

  return null;
};

const getModalPosition = (activeElement, mapContainer) => {
  const { clientWidth: mapWidth, clientHeight: mapHeight } = mapContainer;
  const { id: elementId } = activeElement;
  const mapElement = document.getElementById(elementId);

  if (!mapElement) {
    return { left: 0, top: 0 };
  }

  return { left: mapWidth / 2 - 160, top: mapHeight / 2 - 240 };
};

const getCenter = (activeElement, mapContainer) => {
  const { clientWidth: mapWidth, clientHeight: mapHeight } = mapContainer;
  const { id: elementId } = activeElement;
  const mapElement = document.getElementById(elementId);

  if (!mapElement) {
    return { left: 0, top: 0 };
  }

  const { x, y, width } = mapElement.getBBox();

  const centerOfActiveElement = (width / 2) * focusScale;
  // return { left: mapWidth / 2 + searchContainerWidth - 230, top: mapHeight / 2 - 185 };
  return { left: mapWidth / 2, top: mapHeight / 2 };
};

const View = ({ activeElement, setActiveElement, mapContainer }) => {
  if (!activeElement) {
    return null;
  }

  const modalContent = getModalContent(activeElement);
  const modalPosition = getModalPosition(activeElement, mapContainer);
  const center = getCenter(activeElement, mapContainer);

  return (
    <>
      <div
        id="modalId"
        className={styles.container}
        style={{ ...modalPosition }}
        onMouseUp={({ preventDefault }) => preventDefault()}
      >
        {modalContent}
        <CrossIcon className={styles.crossIcon} onClick={() => setActiveElement(null)} />
        <div className={styles.arrow} />
      </div>
      {/* <div className={styles.point} style={{ ...center }} /> */}
    </>
  );
};

export default View;
