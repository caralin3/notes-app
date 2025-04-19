import { createBrowserRouter } from 'react-router';

import App from '../App';
import { DefaultLayout, NoteLayout } from '../layouts';
import { AllNotes, Note, SignIn, SignUp } from '../pages';

export { NAVIGATION } from './navigation';

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
        path: '/:folder',
        Component: NoteLayout,
        children: [
          {
            path: '/:folder/:slug',
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
