// pages/_app.js
import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';

const theme = createTheme({
  components: {
    CssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
        '#__next': {
          margin: 0,
          padding: 0
        }
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { height: '100%', width: '100%', boxSizing: 'border-box' },
          body: { height: '100%', width: '100%', boxSizing: 'border-box' },
          '#__next': { height: '100%', width: '100%', boxSizing: 'border-box' },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
