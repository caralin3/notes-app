import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';
import App from './App.tsx';
import { Layout } from './layouts/Dashboard.tsx';
import { router } from './router';

// const router = createBrowserRouter([
//   {
//     Component: App, // root layout route
//     children: [
//       {
//         path: '/',
//         Component: Layout,
//         children: [
//           {
//             path: '',
//             Component: DashboardPage,
//           },
//           {
//             path: 'orders',
//             Component: OrdersPage,
//           },
//         ],
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
