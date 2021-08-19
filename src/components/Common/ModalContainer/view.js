import React from 'react';

import MoveInfoModal from 'components/Modals/MoveInfoModal';
import InfoModal from 'components/Modals/InfoModal';
import MoveModal from 'components/Modals/MoveModal';
import AuditoryModal from 'components/Modals/AuditoryModal';

import CrossIcon from 'assets/svg/cross.svg';

import styles from './styles.scss';

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

const View = ({ activeElement, setActiveElement, mapContainer }) => {
  if (!activeElement) {
    return null;
  }

  const modalContent = getModalContent(activeElement);
  const modalPosition = getModalPosition(activeElement, mapContainer);

  return (
    <>
      <div
        id="modalId"
        className={styles.container}
        style={{ ...modalPosition }}
        onMouseUp={({ preventDefault }) => preventDefault()}
      >
        {modalContent}
        <button className={styles.crossButton} onClick={() => setActiveElement(null)}>
          <CrossIcon className={styles.crossIcon} />
        </button>
        <div className={styles.arrow} />
      </div>
    </>
  );
};

export default View;
