import { connect } from 'react-redux';

import { selectors, actions } from 'store/slice';

import Controller from './controller';

const mapStateToProps = (state) => ({
  directedElementId: selectors.getDirectedElementId(state),
  activeMapName: selectors.getActiveMapName(state),
  activeMapElement: selectors.getActiveElement(state),
  mapData: selectors.getActiveMapData(state),
});

const mapDispatchToProps = {
  setActiveElement: actions.setActiveElement,
};

const ConnectedController = connect(mapStateToProps, mapDispatchToProps)(Controller);

export default ConnectedController;
