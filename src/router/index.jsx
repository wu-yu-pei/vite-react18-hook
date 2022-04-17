import { useRoutes } from 'react-router-dom';

import Discover from '@/pages/discover';
import Friend from '@/pages/friend';
import Mine from '@/pages/mine';

const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Discover></Discover>,
    },
    {
      path: '/friend',
      element: <Friend></Friend>,
    },
    {
      path: '/mine',
      element: <Mine></Mine>,
    },
  ]);
  return routes;
};

export default GetRoutes;
