import { useEffect } from 'react';

const Controller = ({ loadGlobalMap, children }) => {
  useEffect(() => {
    loadGlobalMap();
  }, [loadGlobalMap]);

  return children;
};

export default Controller;
