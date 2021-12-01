import { Box, Typography, Paper, tableFooterClasses } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

import LabTabs from './Tabs';


export default function LiveDataComp () {
    
    return (
      <Box  m={2}>
        <Paper >
        <Typography 
            component={Link} 
            to="/live_stuff" 
            color="primary" 
            style={{textDecoration: 'none'}}
        >
            Check out our live feed! 
        </Typography>
        </Paper>

        <Outlet/>
    </Box>
    )
}