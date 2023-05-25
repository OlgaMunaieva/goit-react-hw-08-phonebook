import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { AppBar } from './app-bar/AppBar';

export const Layout = () => {
  return (
    <div
      style={{
        position: 'fixed',
        paddingTop: '40px',
        //   display: 'flex',
        //   maxWidth: 960,
        //   margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
