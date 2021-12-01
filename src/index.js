import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from '@mui/material';
import { theme } from "./MuiStyle";
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
