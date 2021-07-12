import { connect } from 'react-redux';

import { asyncActions } from 'store/slice';

import Controller from './controller';

const mapDispatchToProps = {
  loadGlobalMap: asyncActions.loadGlobalMap,
};

const ConnectedController = connect(null, mapDispatchToProps)(Controller);

export default ConnectedController;
