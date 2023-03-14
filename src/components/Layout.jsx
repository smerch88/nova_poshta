import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';

export const Layout = ({ toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
