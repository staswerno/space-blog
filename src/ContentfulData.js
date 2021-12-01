import { Box, Typography, Paper, Button } from '@mui/material';

export default function ContentfulDataComp () {
    return (
        <>
        <Box m={2}>
        <Paper>
        <div style={{padding: 10}}>
        <Typography>
            Contentful Data Here!
        </Typography>
        <Button variant="outlined">Outlined</Button>
        </div>
        </Paper>
        
        </Box>
        </>
    )
}