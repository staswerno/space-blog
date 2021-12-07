import {Typography} from '@mui/material';
import { theme } from "./MuiStyle";
import { ThemeProvider } from '@mui/material/styles';
import './ErrorRoute.css';

import AppBarComp from './AppBar';


export default function ErrorRoute() {
    return (
            <ThemeProvider theme={theme}>
                <header>
                <AppBarComp />
                </header>
                <main className='astro' sx={{ pt: 6 }} style={{marginTop: 80}}>
                <Typography variant="h4" color='primary' align="center">Lost the way, Major Tom?</Typography>
                </main>
            </ThemeProvider>
    )
}
