import { createSlice } from '@reduxjs/toolkit';

import selectors from './selectors';

const initialState = {
};

const reducers = {
};

const { actions, reducer } = createSlice({
  name: 'store',
  reducers,
  initialState,
});

export { actions, selectors };

export default reducer;
