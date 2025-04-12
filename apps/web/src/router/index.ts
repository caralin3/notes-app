import { createBrowserRouter } from 'react-router';

import App from '../App';
import { Layout } from '../layouts/Dashboard';

export { NAVIGATION } from './navigation.tsx';

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
      },
      {
        path: '/sign-in',
        Component: Layout,
      },
      {
        path: '/orders',
        Component: Layout,
      },
    ],
  },
]);
