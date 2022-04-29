// import React, { memo } from 'react';

// import { HashRouter } from 'react-router-dom';
// import GetRoutes from './router/index';

// import AppHeader from 'components/app-header';
// import AppFotter from 'components/app-fotter';

// const App = memo(() => {
//   return (
//     <>
//       <AppHeader></AppHeader>
//       <GetRoutes />
//       <AppFotter></AppFotter>
//     </>
//   );
// });

// export default App;

import React, { memo } from 'react';

import { useRoutes } from 'react-router-dom';
import routes from './router/index';

import AppHeader from 'components/app-header';
import AppFotter from 'components/app-fotter';

import AppPlayerBar from './pages/player/app-playr-bar';

const App = memo(() => {
  return (
    <>
      <AppHeader></AppHeader>
      {useRoutes(routes)}
      <AppFotter></AppFotter>
      <AppPlayerBar></AppPlayerBar>
    </>
  );
});

export default App;
