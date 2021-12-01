import {useState} from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { Link, Outlet } from 'react-router-dom';


export default function Tabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList 
            selectionFollowsFocus
            textColor="secondary"
            indicatorColor="secondary" 
            onChange={handleChange} 
            aria-label="Live tabs"
          >
            <Tab  label="Live One" 
                  value="1"  
                  component={Link}  
                  to={`/live_stuff/feed_${value}`}
            />
            <Tab  label="Live Two" 
                  value="2"  
                  component={Link} 
                  to={`/live_stuff/feed_${value}`}
            />
            <Tab  label="Live Three" 
                  value="3"
                  component={Link}   
                  to={`/live_stuff/feed_${value}`}
            />
            <Box  ml="auto" style={{ display: "flex", alignItems: "center" }}  >
            <IconButton        
                  component={Link}   
                  to={`/`} 
                  color="primary"
            >
              <CloseIcon />
            </IconButton>
            </Box>
          </TabList>
        </Box>
        <Outlet/>
      </TabContext>
    </Box>
  );
}

