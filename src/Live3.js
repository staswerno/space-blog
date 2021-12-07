import {useState} from 'react';

import Typography from '@mui/material/Typography';


import video from './Images/video.png'

export default function Live3() {
    
    const [videoToggler,setVideoToggler]=useState(false)
    
    const toggleVideo = function (){
    setVideoToggler(!videoToggler)
    }

    return (<div>
        <Typography mx="auto"  textAlign='center' variant='h6' > 
            Live Streams of the International Space Station!
        </Typography>
        
        <iframe width="100%" height="315" 
                src="https://www.youtube.com/embed/DDU-rZs-Ic4" 
                title="YouTube video player" 
                frameborder="0" 
                //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"    
                allowfullscreen></iframe>
        
        <iframe width="100%" height="270" 
                src="https://ustream.tv/embed/9408562" 
                frameborder="0" 
                scrolling="no" 
                allowfullscreen webkitallowfullscreen 
        >
        </iframe>
        
        {videoToggler ? 
        
        <iframe width="100%" height="315"  src="https://www.youtube.com/embed/iik25wqIuFo?controls=0?&autoplay=1"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        
        :<div onClick={()=> {toggleVideo()}}>
            <img src={video} width="100%" height="315" />
        </div> 
        }

        </div>
        
        )
}
