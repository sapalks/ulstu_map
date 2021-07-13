import generateAsyncThunk from 'utils/generateAsyncThunk';

import loadGlobalMap from 'api/loadGlobalMap';
import loadMap2 from 'api/loadMap2';

const asyncActions = {
  loadGlobalMap: generateAsyncThunk('store/loadGlobalMap', loadGlobalMap),
  loadMap2: generateAsyncThunk('store/loadMap2', loadMap2),
};

export default asyncActions;
