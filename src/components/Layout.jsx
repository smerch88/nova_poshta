import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
