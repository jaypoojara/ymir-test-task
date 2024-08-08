'use client';

import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}

export default App;
