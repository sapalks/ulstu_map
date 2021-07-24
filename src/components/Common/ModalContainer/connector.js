import { connect } from 'react-redux';

import { selectors, actions } from 'store/slice';

import View from './view';

const mapStateToProps = (state) => ({
  activeElement: selectors.getActiveElement(state),
  mapScale: selectors.getMapScale(state),
});

const mapDispatchToProps = {
  setActiveElement: actions.setActiveElement,
};

const ConnectedView = connect(mapStateToProps, mapDispatchToProps)(View);

export default ConnectedView;
