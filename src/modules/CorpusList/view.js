import React from 'react';

import styles from './styles.scss';

const getCorpusItems = ({ mapData, setActiveElement, setDirectedElementId, filter }) => {
  const filteredItems = filter && mapData
    ? Object.values(mapData).filter(({ name }) => name.includes(filter))
    : Object.values(mapData);

  const items = filteredItems.map((mapItem) => {
    const { id, name } = mapItem;

    return (
      <div
        onClick={() => setActiveElement(id)}
        className={styles.item}
        onMouseEnter={() => setDirectedElementId(id)}
        onMouseLeave={() => setDirectedElementId(null)}
        key={id}
      >
        <span className={styles.label}>{name}</span>
      </div>
    );
  });

  return items;
};

const View = ({ mapData, setActiveElement, setDirectedElementId, filter }) => {
  if (!mapData) {
    return null;
  }

  const items = getCorpusItems({ mapData, setActiveElement, setDirectedElementId, filter });

  return <div className={styles.container}>{items}</div>;
};

export default View;
