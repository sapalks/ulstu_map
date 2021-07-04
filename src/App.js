import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import store from 'store';

const App = () => (
  <StoreProvider store={store}>
    <h1>Test</h1>
  </StoreProvider>
);

export default App;
