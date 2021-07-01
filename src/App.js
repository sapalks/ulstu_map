import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import store from 'store';

const App = () => <StoreProvider store={store} />;

export default App;
