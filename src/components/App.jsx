import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

const DepartmentsPage = lazy(() => import('../pages/Departments/Departments'));
const TnnPage = lazy(() => import('../pages/Tnn/Tnn'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TnnPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
        </Route>
      </Routes>
    </>
  );
};
