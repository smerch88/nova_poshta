import { lazy, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

import { darkTheme, lightTheme } from 'styles/theme';

import { CssBaseline, ThemeProvider } from '@mui/material';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import { languageSettings } from 'locales/translations';

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
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  };

  i18next.use(initReactI18next).init(languageSettings);

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
              <Route index element={<TnnPage />} />
              <Route path="departments" element={<DepartmentsPage />} />
              <Route path="*" element={<TnnPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
};
