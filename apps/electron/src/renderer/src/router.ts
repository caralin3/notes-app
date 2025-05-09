import { createBrowserRouter } from 'react-router';

import App from './App';
import { DefaultLayout } from './layouts';
import { AllNotes, Folder, Note, SignIn, SignUp } from './pages';

export const router = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: '/',
        Component: DefaultLayout,
        children: [
          {
            path: '',
            Component: AllNotes,
          },
        ],
      },
      {
        path: '/folder/:folderId',
        Component: DefaultLayout,
        children: [
          {
            path: '/folder/:folderId',
            Component: Folder,
          },
          {
            path: '/folder/:folderId/:slug',
            Component: Note,
          },
        ],
      },
      {
        path: '/note',
        Component: DefaultLayout,
        children: [
          {
            path: '/note/:slug',
            Component: Note,
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
