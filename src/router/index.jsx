// import { useRoutes } from 'react-router-dom';
// import Discover from '@/pages/discover';
// import Friend from '@/pages/friend';
// import Mine from '@/pages/mine';

// const GetRoutes = () => {
//   const routes = useRoutes([
//     {
//       path: '/',
//       element: <Discover></Discover>,
//     },
//     {
//       path: '/friend',
//       element: <Friend></Friend>,
//     },
//     {
//       path: '/mine',
//       element: <Mine></Mine>,
//     },
//   ]);
//   return routes;
// };

// export default GetRoutes;

// 懒加载 失败????
// import { lazy, Suspense } from 'react';
// const Discover = lazy(() => import('@/pages/discover'));
// const Friend = lazy(() => import('@/pages/friend'));
// const Mine = lazy(() => import('@/pages/mine'));

// const routes = [
//   {
//     path: '/',
//     element: (
//       <Suspense fallback={<>...</>}>
//         <Discover />
//       </Suspense>
//     ),
//   },
//   {
//     path: '/friend',
//     component: (
//       <Suspense fallback={<>...</>}>
//         <Friend />
//       </Suspense>
//     ),
//   },
//   {
//     path: '/mine',
//     component: (
//       <Suspense fallback={<>...</>}>
//         <Mine />
//       </Suspense>
//     ),
//   },
// ];

// export default routes;

import { Navigate } from 'react-router-dom';
import Discover from '@/pages/discover';
import Artist from '@/pages/discover/child-page/artist';
import Ablum from '@/pages/discover/child-page/album';
import Djradio from '@/pages/discover/child-page/djradio';
import Ranking from '@/pages/discover/child-page/ranking';
import Recommend from '@/pages/discover/child-page/recommend';
import Songs from '@/pages/discover/child-page/songs';

import Friend from '@/pages/friend';
import Mine from '@/pages/mine';

const routes = [
  {
    path: '/',
    // 重定向
    element: <Navigate to="/discover"></Navigate>,
  },
  {
    path: '/discover',
    element: <Discover></Discover>,
    children: [
      {
        path: '/discover',
        // 重定向
        element: <Navigate to="/discover/recommend"></Navigate>,
      },
      {
        path: '/discover/recommend',
        element: <Recommend></Recommend>,
      },
      {
        path: '/discover/ranking',
        element: <Ranking></Ranking>,
      },
      {
        path: '/discover/songs',
        element: <Songs></Songs>,
      },
      {
        path: '/discover/djradio',
        element: <Djradio></Djradio>,
      },
      {
        path: '/discover/artist',
        element: <Artist></Artist>,
      },
      {
        path: '/discover/album',
        element: <Ablum></Ablum>,
      },
    ],
  },
  {
    path: '/friend',
    element: <Friend></Friend>,
  },
  {
    path: '/mine',
    element: <Mine></Mine>,
  },
];

export default routes;
