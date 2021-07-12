import { createSlice, current } from '@reduxjs/toolkit';

import asyncActions from './asyncActions';

const createMapBlock = () => ({ data: null, isLoaded: false, activeElement: null });

const initialState = {
  activeMapName: 'global',
  activeElement: null,
  global: createMapBlock(),
};

const reducers = {
  setActiveElement: (state, { payload: elementId }) => {
    const activeMap = state.activeMapName;
    const element = current(state[activeMap].data[elementId]);
    state.activeElement = element;
  },
};

const extraReducers = {
  [asyncActions.loadGlobalMap.fulfilled]: (state, { payload }) => {
    state.global.data = payload;
  },
};

const { actions, reducer } = createSlice({
  name: 'store',
  reducers,
  initialState,
  extraReducers,
});

const selectors = {
  getGlobalMapData: (state) => state.global.data,
  getActiveMapName: (state) => state.activeMapName,
};

export { actions, selectors, asyncActions };

export default reducer;
