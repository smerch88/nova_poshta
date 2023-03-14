import { lazy, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

import { darkTheme, lightTheme } from 'styles/theme';

import { CssBaseline, ThemeProvider } from '@mui/material';

const DepartmentsPage = lazy(() => import('../pages/Departments/Departments'));
const TnnPage = lazy(() => import('../pages/Tnn/Tnn'));

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem('isDarkTheme') ?? 'false')
      : false
  );

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
            <Route index element={<TnnPage />} />
            <Route path="departments" element={<DepartmentsPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
