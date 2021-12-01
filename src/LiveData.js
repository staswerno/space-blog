import { Box, Typography, Paper, tableFooterClasses } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function LiveDataComp () {
    
    return (
    <Box  m={2}>
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

        <Outlet/>
    </Box>
    )
}