import { createSlice, current } from '@reduxjs/toolkit';

import asyncActions from './asyncActions';

const createMapBlock = () => ({ data: null, isLoaded: false, activeElement: null });

const initialState = {
  activeMapName: 'global',
  activeElement: null,
  activeMapData: null,
  directedElementId: null,
  filter: null,
  global: createMapBlock(),
  map2: createMapBlock(),
};

const reducers = {
  setActiveMapName: (state, { payload: mapName }) => {
    state.activeMapName = mapName;
    state.activeMapData = state[mapName].data || null;
  },
  setActiveElement: (state, { payload: elementId }) => {
    if (elementId === null) {
      state.activeElement = null;

      return;
    }

    const activeMap = state.activeMapName;
    const element = current(state[activeMap].data[elementId]);
    state.activeElement = element;
  },
  setDirectedElementId: (state, { payload: elementId }) => {
    state.directedElementId = elementId;
  },
  setFilter: (state, { payload: filter }) => {
    state.filter = filter;
  },
};

const extraReducers = {
  [asyncActions.loadGlobalMap.fulfilled]: (state, { payload }) => {
    state.global.data = payload;
    state.activeMapData = payload;
  },
  [asyncActions.loadMap2.fulfilled]: (state, { payload }) => {
    state.map2.data = payload;
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
  getActiveElement: (state) => state.activeElement,
  getActiveMapData: (state) => state.activeMapData,
  getDirectedElementId: (state) => state.directedElementId,
  getFilter: (state) => state.filter,
};

export { actions, selectors, asyncActions };

export default reducer;
