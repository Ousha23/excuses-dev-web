import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExcuseGenerator from './components/ExcuseGenerator';
import HttpCode from './pages/HttpCode';
import NotFound from './pages/NotFound';
import Lost from './pages/Lost';
import { ThemeProvider } from '@mui/material';
import theme from './config/theming';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<ExcuseGenerator />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/:http_code" element={<HttpCode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
