import React from 'react';

import CrossIcon from 'assets/svg/cross.svg';
import BuildingModal from 'components/Modals/BuildingModal';

import styles from './styles.scss';

const getModalContent = (activeElement) => {
  const { action } = activeElement;

  if (action === 'move') {
    return <BuildingModal element={activeElement} />;
  }

  return null;
};

const View = ({ activeElement, setActiveElement }) => {
  if (!activeElement) {
    return null;
  }

  const modalContent = getModalContent(activeElement);

  return (
    <>
      <div className={styles.container}>
        {modalContent}
        <CrossIcon className={styles.crossIcon} onClick={() => setActiveElement(null)} />
        <div className={styles.arrow} />
      </div>
    </>
  );
};

export default View;
