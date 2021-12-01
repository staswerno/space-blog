import {Typography} from '@mui/material';
import { theme } from "./MuiStyle";
import { ThemeProvider } from '@mui/material/styles';

import AppBarComp from './AppBar';


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
