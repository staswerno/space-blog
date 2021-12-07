import {useRef, useState} from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function NewsSearch() {

    const [search, Setsearch] = useState("")
    const inputValue = useRef("")
    
    const requestSearch = function (e) {
        console.log(inputValue.current.value)
        if(e.keyCode === 13) Setsearch( `https://garciamarin.github.io/newsfeed/#/search/=query=${inputValue.current.value}`)
    }

    return (
        <Box sx={{ justifyContent: 'center'}}>
            <Typography   textAlign='center' variant='h6'> 
                What interests you?
            </Typography>
            <Typography   textAlign='center'> 
                Search for the latest space news! 
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField  label="Powered by Postcanine" 
                            variant="outlined" 
                            onKeyDown={(e)=>{requestSearch(e)}}
                            inputRef={inputValue}
                            margin='dense'
                />
            </Box>
            {search && <iframe src={search}
                                width= "100%"
                                height="600vh"    
                                key={search}  
                        >
                        </iframe>        
            }
        </Box> 
    )
}
