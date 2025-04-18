import { AllNotesPage } from '@notes-app/ui-library';
import { createBrowserRouter } from 'react-router';

import App from '../App';
import { Layout } from '../layouts/Dashboard';
import { SignIn, SignUp } from '../pages/index.ts';

export { NAVIGATION } from './navigation.tsx';

export const router = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: AllNotesPage,
          },
          {
            path: 'folder/:slug',
            Component: AllNotesPage,
          },
        ],
      },
      {
        path: '/sign-in',
        Component: SignIn,
      },
      {
        path: '/sign-up',
        Component: SignUp,
      },
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     Component: App,
//     children: [
//       {
//         path: '/',
//         Component: Layout,
//       },
//       {
//         path: '/sign-in',
//         Component: Layout,
//       },
//       {
//         path: '/orders',
//         Component: Layout,
//       },
//     ],
//   },
// ]);
