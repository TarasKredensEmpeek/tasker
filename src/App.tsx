import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, createUseStyles } from 'react-jss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Tasker from './modules/Tasker';

const theme = {};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Tasker />,
  },
]);

const useStyles = createUseStyles({
  '@global': {
    body: {
      fontWeight: 300,
      fontFamily: 'sans-serif',
      backgroundColor: '#eaeaea',
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    ul: { listStyle: 'none' },
    a: { textDecoration: 'none' },
  },
});

const GlobalInjection = () => {
  useStyles();
  return null;
};

const App = () => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalInjection />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
