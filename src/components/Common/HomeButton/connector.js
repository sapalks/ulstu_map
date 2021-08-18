import { connect } from 'react-redux';
import { actions, selectors } from 'store/slice';

import View from './view';

const mapStateToProps = (state) => ({
  mapName: selectors.getActiveMapName(state),
});

const mapDispatchToProps = {
  setActiveMapName: actions.setActiveMapName,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
