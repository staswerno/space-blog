import { useParams } from 'react-router-dom';

import { Fade } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';

import NewsSearch from './NewsSearch';
import Live3 from './Live3';


export default function Tab() {
    const params = useParams();

    const TabContent = {
        '1':<Typography mx="auto"  textAlign='center' variant='h2' > 
                Live {params.value}
            </Typography>,

        '2':<NewsSearch/>,

        '3':<Live3/>
    }

    return (
    <Fade in={true} timeout={700}>
        <TabPanel value={params.value}>
            {TabContent[params.value]}
        </TabPanel>
    </Fade>
    )
}

