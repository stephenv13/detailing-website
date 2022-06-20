import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Grid, useTheme, MobileStepper, Paper, Card, CardContent, List, ListItem,} from '@mui/material'

import Image from 'next/dist/client/image';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';

import Fade from 'react-reveal/Fade'

// SWIPER CAROUSEL
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "/src/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



function Home() {

  const about_us = "Welcome to Grigg's Detailing! We are a solo-run, local detailing start-up based in Newark, Ohio. "
    + "We offer a variety of services from interior details and exterior details to clay and paint sealants. "
    + "Check out our current service offerings below!"

  
  return (
      <Box sx={{ flexGrow: 1 }}>

        {/* HOME PAGE NAV BAR */}
        <AppBar position="static">
          <Toolbar>
            <LocalCarWashIcon sx={{fontSize: 40}}></LocalCarWashIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>Griggs Detailing</Typography>
            <Button sx={{ fontWeight: 'bold' }} color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>

        {/* CAROUSEL */}
        <Paper elevation={1} sx={{m: 1,}}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <Image src={'/bmw2.jpg'} width={1920} height={1080}></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={'/tesla.jpg'} width={1920} height={1080}></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={'/lambo.jpg'} width={1920} height={1080}></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={'/mercedes.jpg'} width={1920} height={1080}></Image>
            </SwiperSlide>
          </Swiper>   
        </Paper>
          
        {/* ABOUT US */}
        <Typography sx={{fontWeight: 'bold', fontSize: 75, textAlign: 'center', mt: 2,}}>About Us</Typography>
        <Typography sx={{p: 2,}}>{about_us}</Typography>


        {/* SERVICES */}
        <Typography sx={{fontSize: 75, fontWeight: 'bold', textAlign: 'center', mt:5}}>Services</Typography>
        <Typography sx={{fontSize: 25, textAlign: 'center'}}>100% Satisfaction Guaranteed</Typography>

            <Grid container spacing={10} sx={{p: 5,}}>
              <Grid item xs={4}>

                {/* INTERNAL PACKAGE */}
                <Fade big delay={750}>
                  <Card sx={{ minWidth: 275 }} elevation={10}>
                    <CardContent>
                      <LocalCarWashIcon sx={{fontSize: 75,}}></LocalCarWashIcon>
                      <Typography sx={{fontSize: 40, fontWeight: 'bold'}}>Internal Package</Typography>

                      <Typography sx={{fontSize: 18, fontWeight: 'bold'}}>1-2 Days to Complete</Typography>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> <br></br>This package includes: </Typography>

                        <ul style={{textAlign: 'left'}}>
                          <li>Full Internal Cleaning</li>
                          <li>Ect.</li>
                        </ul>

                      <Typography>Starting Price: $50</Typography>
                      <Button variant='contained' sx={{mt: 2}}>Schedule Now</Button>
                      
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>

              <Grid item xs={4}>

                {/* FULL PACKAGE */}
                <Fade big delay={1250}>
                  <Card sx={{ minWidth: 275 }} elevation={20}>
                    <CardContent>
                      <LocalCarWashIcon sx={{fontSize: 75,}}></LocalCarWashIcon>
                      <Typography sx={{fontSize: 40, fontWeight: 'bold'}}>Full Package</Typography>

                      <Typography sx={{fontSize: 18, fontWeight: 'bold'}}>2-3 Days to Complete</Typography>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> <br></br>This package includes: </Typography>

                        <ul style={{textAlign: 'left'}}>
                          <li>Full External Cleaning</li>
                          <li>Full Internal Cleaning</li>
                          <li>Ect.</li>
                        </ul>

                      <Typography>Starting Price: $100</Typography>
                      <Button variant='contained' sx={{mt: 2}}>Schedule Now</Button>
                      
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>

              <Grid item xs={4}>

                {/* EXTERNAL PACKAGE */}
                <Fade big delay={750}>
                  <Card sx={{ minWidth: 275 }} elevation={10}>
                    <CardContent>
                      <LocalCarWashIcon sx={{fontSize: 75,}}></LocalCarWashIcon>
                      <Typography sx={{fontSize: 40, fontWeight: 'bold'}}>External Package</Typography>

                      <Typography sx={{fontSize: 18, fontWeight: 'bold'}}>1-2 Days to Complete</Typography>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> <br></br>This package includes: </Typography>

                        <ul style={{textAlign: 'left'}}>
                          <li>Full External Cleaning</li>
                          <li>Ect.</li>
                        </ul>

                      <Typography>Starting Price: $50</Typography>
                      <Button variant='contained' sx={{mt: 2}}>Schedule Now</Button>
                      
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>

            </Grid>



      {/* CONTACT INFORMATION */}
      <Box sx={{flexGrow: 1, textAlign: 'center', mt: 10, p: 2}}>
          <Typography variant='h1'>Contact Us</Typography>
          <Typography variant='p'>Questions? Concerns? We'd love to hear from you!</Typography>

          <Grid container spacing={10} sx={{p: 5,}}>
            <Grid item md={6}>

              {/* EMAIL CARD */}
              <Card sx={{}}>
                <CardContent>
                  <EmailIcon sx={{fontSize: 75}}></EmailIcon>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Email us at:</Typography>
                  <Typography variant="p">example@gmail.com</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>

              {/* PHONE CARD */}
              <Card sx={{}}>
                <CardContent>
                  <PhoneIphoneIcon sx={{fontSize: 75,}}></PhoneIphoneIcon>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Call or Text us at:</Typography>
                  <Typography variant="p">(123)-456-7890</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      </Box>

    </Box>
  );
}

export default Home;