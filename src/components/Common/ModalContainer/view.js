import React from 'react';

import CrossIcon from 'assets/svg/cross.svg';
import MoveInfoModal from 'components/Modals/MoveInfoModal';
import InfoModal from 'components/Modals/InfoModal';
import MoveModal from 'components/Modals/MoveModal';

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

  return null;
};

const getModalPosition = (activeElement) => {
  const { id: elementId } = activeElement;
  const mapElement = document.getElementById(elementId);

  if (!mapElement) {
    return { left: 0, top: 0 };
  }

  const { x, y, width } = mapElement.getBBox();

  return { left: x - 157 + width / 2, top: y - 210 };
};

const View = ({ activeElement, setActiveElement, mapScale }) => {
  if (!activeElement) {
    return null;
  }

  const modalContent = getModalContent(activeElement);
  const modalPosition = getModalPosition(activeElement);

  return (
    <>
      <div className={styles.container} style={{ ...modalPosition, transform: `scale(${2 + 0})` }}>
        {modalContent}
        <CrossIcon className={styles.crossIcon} onClick={() => setActiveElement(null)} />
        <div className={styles.arrow} />
      </div>
    </>
  );
};

export default View;
