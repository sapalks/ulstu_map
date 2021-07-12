import generateAsyncThunk from 'utils/generateAsyncThunk';

import loadGlobalMap from 'api/loadGlobalMap';

const asyncActions = {
  loadGlobalMap: generateAsyncThunk('store/loadGlobalMap', loadGlobalMap),
};

export default asyncActions;
