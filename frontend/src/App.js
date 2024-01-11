import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'aos/dist/aos.css';

import theme from './theme/theme';
import Layout from './layout/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Bob's Programming Academy"
        defaultTitle="Bob's Programming Academy"
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
