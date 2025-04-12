import type { Navigation } from '@toolpad/core';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items'
  },
  {
    title: 'Dashboard'
    // icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders'
    // icon: <ShoppingCartIcon />,
  }
];

const BRANDING = {
  title: 'My Toolpad Core App'
};

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
    // <>
    //   <img alt="logo" className="logo" src={electronLogo} />
    //   <Typography className="creator">Powered by electron-vite</Typography>
    //   <div className="text">
    //     Build an Electron app with <span className="react">React</span>
    //     &nbsp;and <span className="ts">TypeScript</span>
    //   </div>
    //   <p className="tip">
    //     Please try pressing <code>F12</code> to open the devTool
    //   </p>
    //   <div className="actions">
    //     <div className="action">
    //       <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
    //         Documentation
    //       </a>
    //     </div>
    //     <div className="action">
    //       <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
    //         Send IPC
    //       </a>
    //     </div>
    //   </div>
    //   <Versions></Versions>
    // </>
  );
}

export default App;
