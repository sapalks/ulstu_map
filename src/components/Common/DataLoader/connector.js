import { connect } from 'react-redux';

import { asyncActions } from 'store/slice';

import Controller from './controller';

const mapDispatchToProps = {
  loadGlobalMap: asyncActions.loadGlobalMap,
  loadCorpus1: asyncActions.loadCorpus1,
  loadCorpus2: asyncActions.loadCorpus2,
  loadCorpus3: asyncActions.loadCorpus3,
  loadCorpus4: asyncActions.loadCorpus4,
  loadCorpus5: asyncActions.loadCorpus5,
};

const ConnectedController = connect(null, mapDispatchToProps)(Controller);

export default ConnectedController;
