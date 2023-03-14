import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const components = {
  MuiCssBaseline: {
    styleOverrides: `
          @media screen and (min-width: 320px) {
            ::-webkit-scrollbar {
              width: 5px;
            }
            ::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.5);
            }
            ::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 5px;
            }
          }
          #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
        `,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: red[700],
    },
  },
  components,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[700],
    },
  },
  components,
});
