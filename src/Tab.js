import { useParams } from 'react-router-dom';

import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';


export default function Tab() {
    const params = useParams();
    
    return (
        <TabPanel value={params.value}>
            <Typography mx="auto"  textAlign='center' variant='h2' > Live {params.value}</Typography>
        </TabPanel>
    )
}

