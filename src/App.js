import './App.css'
import LiveDataComp from './LiveData';
import ContentfulDataComp from './ContentfulData';
import AppBarComp from './AppBar';
import { Grid } from '@mui/material';
import { CssBaseline } from '@mui/material';
// import { theme } from "./MuiStyle";
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { grey, deepPurple, teal } from '@mui/material/colors';

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
                primary: deepPurple,
                divider: deepPurple[200],
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
        spacing={2}   
        rowSpacing={3}
        justifyContent="space-around"
        >
        <Grid item xs={12} md={4}>
          <Grid item><LiveDataComp /></Grid>
          <Grid item><LiveDataComp /></Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid item><ContentfulDataComp /></Grid>
          <Grid item><ContentfulDataComp /></Grid>
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
