import generateAsyncThunk from 'utils/generateAsyncThunk';

import loadGlobalMap from 'api/loadGlobalMap';
import loadCorpus1 from 'api/loadCorpus1';
import loadCorpus2 from 'api/loadCorpus2';
import loadCorpus3 from 'api/loadCorpus3';
import loadCorpus4 from 'api/loadCorpus4';
import loadCorpus5 from 'api/loadCorpus5';
import loadCorpus6 from 'api/loadCorpus6';

const asyncActions = {
  loadGlobalMap: generateAsyncThunk('store/loadGlobalMap', loadGlobalMap),
  loadCorpus1: generateAsyncThunk('store/loadCorpus1', loadCorpus1),
  loadCorpus2: generateAsyncThunk('store/loadCorpus2', loadCorpus2),
  loadCorpus3: generateAsyncThunk('store/loadCorpus3', loadCorpus3),
  loadCorpus4: generateAsyncThunk('store/loadCorpus4', loadCorpus4),
  loadCorpus5: generateAsyncThunk('store/loadCorpus5', loadCorpus5),
  loadCorpus6: generateAsyncThunk('store/loadCorpus6', loadCorpus6),
};

export default asyncActions;
