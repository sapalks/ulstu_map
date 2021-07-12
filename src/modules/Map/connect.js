import { connect } from 'react-redux';

import { selectors, actions } from 'store/slice';

import Controller from './controller';

const mapStateToProps = (state) => ({
  globalMapData: selectors.getGlobalMapData(state),
});

const mapDispatchToProps = {
  setActiveElement: actions.setActiveElement,
};

const ConnectedController = connect(mapStateToProps, mapDispatchToProps)(Controller);

export default ConnectedController;
