import { useEffect } from 'react';

const Controller = ({
  loadGlobalMap,
  loadCorpus1,
  loadCorpus2,
  loadCorpus3,
  loadCorpus4,
  loadCorpus5,
  children,
}) => {
  useEffect(() => {
    loadGlobalMap();
    loadCorpus1();
    loadCorpus2();
    loadCorpus3();
    loadCorpus4();
    loadCorpus5();
  }, [loadGlobalMap, loadCorpus1, loadCorpus2, loadCorpus3, loadCorpus4, loadCorpus5]);

  return children;
};

export default Controller;
