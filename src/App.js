import { useState } from 'react';

import LiveDataComp from './LiveData';
import ContentfulDataComp from './ContentfulData';
import AppBarComp from './AppBar';

import { Grid } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { grey, deepPurple, teal } from '@mui/material/colors';

import './App.css'

function App() {
  const [mode, setMode] = useState('light');

  function darkToggle() {
    mode === 'light' ? setMode('dark') : setMode('light');
  }

  const theme = createTheme({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
              // palette values for light mode
              primary: {
                main: deepPurple[600],
                light: deepPurple[500],
                dark: deepPurple[700],
            },
                divider: deepPurple[600],
                info: {
                  main: teal[200],
                  light: teal[100],
                  dark: teal[300],
              },
                text: {
                primary: grey[900],
                secondary: grey[800],
                },
            }
            : {
              // palette values for dark mode
                primary: {
                    main: teal[200],
                    light: teal[100],
                    dark: teal[300],
                },
                divider: teal[200],
                info: {
                  main: teal[200],
                  light: teal[100],
                  dark: teal[300],
              },
                
            background: {
                default: '#121212',
                paper: '#161616',
                },
                
                text: {
                    primary: teal[200],
                    secondary: grey[200],
                },
                
                
            }),
        },
    typography: {
        fontFamily: 'Space Mono',
    }
});



  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className='App'>
    
      <header>
        <AppBarComp darkToggle={darkToggle} />
      </header>
      <main style={{marginTop: 60}}>
      <Grid 
        container 
        rowSpacing={0}
        justifyContent="space-around"
        >
        <Grid item xs={12} md={5}>
          <Grid item><LiveDataComp /></Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid item><ContentfulDataComp /></Grid>
        </Grid>
      </Grid>
      </main>
      <footer>
   
      </footer>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
