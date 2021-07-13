import { useEffect } from 'react';

const Controller = ({ loadGlobalMap, loadMap2, children }) => {
  useEffect(() => {
    loadGlobalMap();
    loadMap2();
  }, [loadGlobalMap, loadMap2]);

  return children;
};

export default Controller;
