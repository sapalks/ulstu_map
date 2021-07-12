import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import DataLoader from 'components/Common/DataLoader';
import Page from 'page';

import store from 'store';

import 'normalize.css';

const App = () => (
  <StoreProvider store={store}>
    <DataLoader>
      <Page />
    </DataLoader>
  </StoreProvider>
);

export default App;
