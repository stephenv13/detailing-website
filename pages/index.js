import * as React from 'react';
import {scroller} from 'react-scroll'
import {AppBar, Box, Toolbar, Typography, Button, Fade} from '@mui/material'

import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';

import Services from '../components/services'
import Carousel from '../components/carousel';
import ContactUs from '../components/contact_us';




export default function Home() {

  const about_us = "Welcome to Grigg's Detailing! We are a solo-run, local detailing start-up based in Newark, Ohio. "
    + "We offer a variety of services from interior details and exterior details to clay and paint sealants. "
    + "Check out our current service offerings below!"
  
  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  
  return (
    <Box sx={{ flexGrow: 1 }} className='homePage'>

      {/* HOME PAGE NAV BAR */}
      <AppBar position="static" className='appbar'>
        <Toolbar>
          <LocalCarWashIcon sx={{fontSize: 40}}></LocalCarWashIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>Grigg&apos;s Detailing</Typography>
          <Button sx={{ fontWeight: 'bold'}} color="inherit" onClick= {scrollToContact}>Contact Us</Button>
        </Toolbar>
      </AppBar>

      {/* CAROUSEL */}
      <Carousel></Carousel>
        
      {/* ABOUT US */}
      <Typography sx={{fontWeight: 'bold', fontSize: 50, textAlign: 'center', mt: 10,}}>About Us</Typography>
      <Typography sx={{p: 2, mb: 20, textAlign: 'center'}}>{about_us}</Typography>


      {/* SERVICES */}
      <Typography sx={{fontSize: 75, fontWeight: 'bold', textAlign: 'center', mt:5}}>Services</Typography>
      <Typography sx={{fontSize: 20, textAlign: 'center'}}>100% Satisfaction Guaranteed</Typography>

      <Services></Services>


      {/* CONTACT INFORMATION */}
      <ContactUs></ContactUs>

  </Box>
  );
}