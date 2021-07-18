import { connect } from 'react-redux';

import { asyncActions } from 'store/slice';

import Controller from './controller';

const mapDispatchToProps = {
  loadGlobalMap: asyncActions.loadGlobalMap,
  loadMap2: asyncActions.loadMap2,
};

const ConnectedController = connect(null, mapDispatchToProps)(Controller);

export default ConnectedController;