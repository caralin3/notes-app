import './App.css';

import { useEffect, useMemo, useState } from 'react';

import type { Authentication } from '@toolpad/core';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Hub } from 'aws-amplify/utils';
import { Outlet } from 'react-router';

import { type Session, SessionContext } from './contexts/SessionContext';
import { NAVIGATION } from './router';
import { amplifyHubListener } from './services/amplify';

const BRANDING = {
  title: 'My Toolpad Core App',
};

const AUTHENTICATION: Authentication = {
  signIn: () => {},
  signOut: () => {},
};

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const sessionContextValue = useMemo(
    () => ({
      session,
      setSession,
      loading,
    }),
    [session, loading],
  );

  useEffect(() => {
    /* start listening for messages */
    const hubListenerCancelToken = Hub.listen('auth', (data) => {
      console.log('data', data);
      amplifyHubListener(data.payload);
    });

    // Returns an `unsubscribe` function to be called during teardown
    // const unsubscribe = onAuthStateChanged((user: User | null) => {
    //   if (user) {
    //     setSession({
    //       user: {
    //         name: user.displayName || '',
    //         email: user.email || '',
    //         image: user.photoURL || '',
    //       },
    //     });
    //   } else {
    //     setSession(null);
    //   }
    //   setLoading(false);
    // });
    // return () => unsubscribe();
    return () => hubListenerCancelToken();
  }, []);

  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      session={session}
      authentication={AUTHENTICATION}>
      <SessionContext.Provider value={sessionContextValue}>
        <Outlet />
      </SessionContext.Provider>
    </ReactRouterAppProvider>
    // <AppProvider>
    //   <Box>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </Box>
    //   <Typography variant="h1">Vite + React</Typography>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </AppProvider>
  );
}

export default App;
