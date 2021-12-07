import { useParams } from 'react-router-dom';
import { Fade } from '@mui/material';

import NewsSearch from './NewsSearch'
import video from './Images/video.png'

import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';

// import {useState} from 'react';

export default function Tab() {
    const params = useParams();

    // const [videoTogg,setVideoTogg]=useState(false)
    // const displayTogg = function (){
    // setVideoTogg(!videoTogg)
    // }
    


    const TabContent = {
        '1':<Typography mx="auto"  textAlign='center' variant='h2' > 
                Live {params.value}
            </Typography>,

        '2':<NewsSearch/>,

        '3':(<div>
            <Typography mx="auto"  textAlign='center' variant='h6' > 
               Live Streams of the International Space Station!
            </Typography>
            <iframe width="100%" height="315" 
                    src="https://www.youtube.com/embed/DDU-rZs-Ic4" title="YouTube video player" 
                    frameborder="0" 
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"    
                    allowfullscreen></iframe>
            
            <iframe width="100%" height="270" 
            src="https://ustream.tv/embed/9408562" scrolling="no" 
            allowfullscreen webkitallowfullscreen 
            //frameborder="0" 
            >
                {/* style="border: 0 none transparent;" */}
            </iframe>
            
            {/* <div class="video">
                  videoTogg ? 
                    
                        'Hola':
                    <div onclick={()=> {displayTogg()}}>
                    <img src={video} width="100%" height="315" />
                    </div> 
                    /*<div style="display:none">
                    <iframe width="100%" height="315"  src="https://www.youtube.com/embed/iik25wqIuFo?controls=0?autoplay=1"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div> 
                
            </div>
             */}
            
            </div>
            
            )
}

    return (
    <Fade in={true} timeout={700}>
        <TabPanel value={params.value}>
            {TabContent[params.value]}
        </TabPanel>
    </Fade>
    )
}

