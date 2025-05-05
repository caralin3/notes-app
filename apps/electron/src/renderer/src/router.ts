import { createBrowserRouter } from 'react-router';

import App from './App';
import { DefaultLayout, NoteLayout } from './layouts';
import { AllNotes, Note, SignIn, SignUp } from './pages';

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
        Component: NoteLayout,
        children: [
          {
            path: '/folder/:folderId',
            Component: Note,
          },
          {
            path: '/folder/:folderId/:slug',
            Component: Note,
          },
        ],
      },
      {
        path: '/note',
        Component: NoteLayout,
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
