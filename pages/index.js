import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import logo from '/assets/car-logo.svg'
import Image from 'next/dist/client/image';

export default function ButtonAppBar() {
  return (

    // HOME PAGE NAV BAR
    <div className='nav-bar'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Image src={logo} height={50} width={50}/>
            <Typography className= "site-name" variant="h6" component="div" sx={{ flexGrow: 1 }}>Josh Griggs Detailing</Typography>
            <Button className="contact" color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>

  );
}