import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'

import logo from '/assets/car-logo.svg'
import Image from 'next/dist/client/image';

export default function ButtonAppBar() {
  return (

    // HOME PAGE NAV BAR
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Image src={logo} height={50} width={50}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>Josh Griggs Detailing</Typography>
            <Button sx={{ fontWeight: 'bold' }} color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
}