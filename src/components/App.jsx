import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

const DepartmentsPage = lazy(() => import('../pages/Departments'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DepartmentsPage />} />
        </Route>
      </Routes>
    </>
  );
};
