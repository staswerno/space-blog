import { Box, Typography, Paper, Fade, tableFooterClasses } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function LiveDataComp () {
    
    return (
    <Box  m={2}>
        <Fade in={true} timeout={700}>
        <Paper >
        <Typography 
            component={Link} 
            to="/live_stuff" 
            color="primary" 
            style={{textDecoration: 'none'}}
            sx={{':hover': {
                color: 'secondary.main'
                },
                }}
        >
            Check out our live feed! 
        </Typography>
        </Paper>
        </Fade>
        <Outlet/>
        
    </Box>
    )
}