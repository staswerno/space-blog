import {Typography} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppBarComp from './AppBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1C1427',
      light: '#1C1427',
      dark: '#1C1427',
    },
  },
  typography: {
    fontFamily: 'Space Mono',
  }
});

export default function ErrorRoute() {
    return (
            <ThemeProvider theme={theme}>
                <header>
                <AppBarComp />
                </header>
                <main style={{marginTop: 80}}>
                <Typography align="center">Lost the way, Major Tom?</Typography>
                </main>
           </ThemeProvider>
    )
}
