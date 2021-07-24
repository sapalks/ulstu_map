import { createSlice, current } from '@reduxjs/toolkit';

import asyncActions from './asyncActions';

const initialState = {
  activeMapName: 'global',
  activeElement: null,
  activeMapData: null,
  directedElementId: null,
  filter: null,
  mapScale: null,
  maps: null,
};

const mapHandler = (state, mapsData) => {
  const formatedData = mapsData.reduce(
    (prev, { config: { mapName }, items }) => ({
      ...prev,
      [mapName]: { items },
    }),
    {},
  );

  state.maps = { ...state.maps, ...formatedData };
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
  setMapScale: (state, { payload: scale }) => {
    state.mapScale = scale;
  },
};

const extraReducers = {
  [asyncActions.loadGlobalMap.fulfilled]: (state, { payload: { config, items } }) => {
    const { mapName } = config;

    state.activeMapData = items;
    state.maps = { ...state.maps, [mapName]: { items } };
  },
  [asyncActions.loadCorpus1.fulfilled]: (state, { payload }) => {
    mapHandler(state, payload);
  },
  [asyncActions.loadCorpus2.fulfilled]: (state, { payload }) => {
    mapHandler(state, payload);
  },
  [asyncActions.loadCorpus3.fulfilled]: (state, { payload }) => {
    mapHandler(state, payload);
  },
  [asyncActions.loadCorpus4.fulfilled]: (state, { payload }) => {
    mapHandler(state, payload);
  },
  [asyncActions.loadCorpus5.fulfilled]: (state, { payload }) => {
    mapHandler(state, payload);
  },
};

const { actions, reducer } = createSlice({
  name: 'store',
  reducers,
  initialState,
  extraReducers,
});

const selectors = {
  getGlobalMapData: (state) => state?.global?.data,
  getActiveMapName: (state) => state.activeMapName,
  getActiveElement: (state) => state.activeElement,
  getActiveMapData: (state) => state.activeMapData,
  getDirectedElementId: (state) => state.directedElementId,
  getFilter: (state) => state.filter,
  getMapScale: (state) => state.mapScale,
};

export { actions, selectors, asyncActions };

export default reducer;
