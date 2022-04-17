import React, { memo } from 'react';

import { HashRouter } from 'react-router-dom';
import GetRoutes from './router/index';

import AppHeader from 'components/app-header';
import AppFotter from 'components/app-fotter';

const App = memo(() => {
  return (
    <HashRouter>
      <AppHeader></AppHeader>
      <GetRoutes />
      <AppFotter></AppFotter>
    </HashRouter>
  );
});

export default App;
