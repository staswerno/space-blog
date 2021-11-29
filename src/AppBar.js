import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function AppBarComp () {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Space [b]Log
            </Typography>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <DarkModeIcon />
            </IconButton>
        </Toolbar>
        </AppBar>
    </Box>
        </>
    )
}