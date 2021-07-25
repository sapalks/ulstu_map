import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import Page from 'page';

import store from 'store';

import 'styles/global.scss';
import 'normalize.css';

const App = () => (
  <StoreProvider store={store}>
    <Page />
  </StoreProvider>
);

export default App;
