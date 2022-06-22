import * as React from 'react';
import {scroller} from 'react-scroll'
import {AppBar, Box, Toolbar, Typography, Button, Grid, Paper, Card, CardContent,} from '@mui/material'

import Image from 'next/dist/client/image';

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
  
    const scrollToContact = () => {
      scroller.scrollTo("contact", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    };



  
  return (
      <Box sx={{ flexGrow: 1 }}>

        {/* HOME PAGE NAV BAR */}
        <AppBar position="static">
          <Toolbar>
            <LocalCarWashIcon sx={{fontSize: 40}}></LocalCarWashIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>Grigg's Detailing</Typography>
            <Button sx={{ fontWeight: 'bold'}} color="inherit" onClick= {scrollToContact}>Contact Us</Button>
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
        <Typography sx={{p: 2, mb: 30, textAlign: 'center'}}>{about_us}</Typography>


        {/* SERVICES */}
        <Typography sx={{fontSize: 75, fontWeight: 'bold', textAlign: 'center', mt:5}}>Services</Typography>
        <Typography sx={{fontSize: 25, textAlign: 'center'}}>100% Satisfaction Guaranteed</Typography>
            
            {/* FIRST ROW OF SERVICES */}
            <Grid container spacing={10} sx={{p: 5,}}>
              <Grid item xs={12} md={4} align= 'center'>

                {/* INTERIOR DETAIL */}
                <Fade big delay={750}>
                  <Card sx={{textAlign: 'center', minHeight: 640, maxWidth: 575}} elevation={20}>
                    <CardContent>
                      <LocalCarWashIcon sx={{fontSize: 75,}}></LocalCarWashIcon>
                      <Typography sx={{fontSize: 40, fontWeight: 'bold'}}>Interior Detail</Typography>

                      <Typography sx={{fontSize: 18, fontWeight: 'bold'}}>2-4 Hours to Complete</Typography>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> <br></br>This package includes:</Typography>

                        <ul style={{display:'inline-block', textAlign: 'left'}}>
                          <li>Interior Vacuum</li>
                          <li>Plastics, Dash and Cup Holders Wiped Down</li>
                          <li>Door Jambs Wiped Down</li>
                          <li>Cloth Seat and Floor Extraction</li>
                          <li>Leather Seats Cleaned and Conditioned</li>
                          <li>Windows Wiped Down</li>
                        </ul>

                      <Box sx={{mt:18}}>
                        <Typography sx={{fontWeight: 'bold'}}>Starting Price: $49.99</Typography>
                        <Button variant='contained' sx={{mt: 2}}>Schedule Now</Button>
                      </Box>

                      
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>

              <Grid item xs={12} md={4}>

                {/* FULL INTERIOR & EXTERIOR DETAIL */}
                <Fade big delay={750}>
                  <Card sx={{textAlign: 'center', minHeight: 640, maxWidth: 575}} elevation={20}>
                    <CardContent>
                      <LocalCarWashIcon sx={{fontSize: 75,}}></LocalCarWashIcon>
                      <Typography sx={{fontSize: 40, fontWeight: 'bold'}}>Interior & Exterior Detail</Typography>

                      <Typography sx={{fontSize: 18, fontWeight: 'bold'}}>4-5 Hours to Complete</Typography>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> <br></br>This package includes:</Typography>

                        <ul style={{display:'inline-block', textAlign: 'left'}}>
                          <li>Interior Vacuum</li>
                          <li>Plastics, Dash and Cup Holders Wiped Down</li>
                          <li>Door Jambs Wiped Down</li>
                          <li>Windows Wiped Down</li>
                          <li>Foam Bath</li>
                          <li>Contact Wash</li>
                          <li>Wheel and Tire Cleaning</li>
                          <li>Clar Bar</li>
                          <li>Iron Removal</li>
                          <li>6 Month Ceramic Spray Sealant</li>
                          <li>Engine Cleaning</li>
                          <li>Cloth Seat and Floor Extraction</li>
                          <li>Leather Seat Cleaning and Conditioning</li>
                        </ul>

                      <Typography sx={{fontWeight: 'bold'}}>Starting Price: $199.99</Typography>
                      <Button variant='contained' sx={{mt: 2}}>Schedule Now</Button>
                      
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>

              <Grid item xs={12} md={4}>

                {/* CLAY & PAINT SEALANT */}
                <Fade big delay={750}>
                  <Card sx={{textAlign: 'center', minHeight: 640, maxWidth: 575}} elevation={20}>
                    <CardContent>
                      <LocalCarWashIcon sx={{fontSize: 75,}}></LocalCarWashIcon>
                      <Typography sx={{fontSize: 40, fontWeight: 'bold'}}>Clay & Paint Sealant</Typography>

                      <Typography sx={{fontSize: 18, fontWeight: 'bold'}}>3-4 Hours to Complete</Typography>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> <br></br>This package includes:</Typography>

                        <ul style={{display:'inline-block', textAlign: 'left'}}>
                          <li>Interior Vacuum</li>
                          <li>Plastics, Dash and Cup Holders Wiped Down</li>
                          <li>Door Jambs Wiped Down</li>
                          <li>Windows Wiped Down</li>
                          <li>Foam bath</li>
                          <li>Contact Wash</li>
                          <li>Wheel and Tire Cleaning</li>
                          <li>Clay Bar</li>
                          <li>Iron Removal</li>
                          <li>6 Month Ceramic Spray Sealant</li>
                        </ul>

                      <Box sx={{mt:8}}>
                        <Typography sx={{fontWeight: 'bold'}}>Starting Price: $179.99</Typography>
                        <Button variant='contained' sx={{mt: 2}}>Schedule Now</Button>
                      </Box>

                      
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>

            </Grid>

            {/* SECOND ROW OF SERVICES */}
            <Grid container spacing={1} sx={{p:5}}>
              <Grid item xs={12} md={6} align='center'>

                {/* EXPRESS DETAIL */}
                <Fade big delay={750}>
                  <Card sx={{maxWidth: 450, minHeight: 510, textAlign: 'center'}} elevation={20}>
                    <CardContent>
                      <LocalCarWashIcon sx={{fontSize: 75,}}></LocalCarWashIcon>
                      <Typography sx={{fontSize: 40, fontWeight: 'bold'}}>Express Detail</Typography>

                      <Typography sx={{fontSize: 18, fontWeight: 'bold'}}>2-3 Hours to Complete</Typography>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> <br></br>This package includes:</Typography>

                        <ul style={{display:'inline-block', textAlign: 'left'}}>
                          <li>Interior Vacuum</li>
                          <li>Plastics, Dash and Cup Holders Wiped Down</li>
                          <li>Door Jambs Wiped Down</li>
                          <li>Windows Wiped Down</li>
                          <li>Foam Bath</li>
                          <li>Contact Wash</li>
                          <li>Wheels and Tires Cleaned</li>
                        </ul>

                      <Typography sx={{fontWeight: 'bold'}}>Starting Price: $74.99</Typography>
                      <Button variant='contained' sx={{mt: 2}}>Schedule Now</Button>
                      
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>

              <Grid item xs={12} md={6} align='center'>

                {/* MAINTENANCE WASH */}
                <Fade big delay={750}>
                  <Card sx={{maxWidth: 450, minHeight: 510, textAlign: 'center'}} elevation={20}>
                    <CardContent>
                      <LocalCarWashIcon sx={{fontSize: 75,}}></LocalCarWashIcon>
                      <Typography sx={{fontSize: 40, fontWeight: 'bold'}}>Maintenance Wash</Typography>

                      <Typography sx={{fontSize: 18, fontWeight: 'bold'}}>1-2 Hours to Complete</Typography>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> <br></br>This package includes:</Typography>

                        <ul style={{display:'inline-block', textAlign: 'left'}}>
                          <li>Bi-Weekly Cleaning</li>
                          <li>Full Interior and Exterior Cleaning</li>
                        </ul>

                      <Box sx={{mt: 13}}>
                        <Typography sx={{fontWeight: 'bold'}}>Starting Price: $39.99</Typography>
                        <Button variant='contained' sx={{mt: 2}}>Schedule Now</Button>
                      </Box>

                      
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>

            </Grid>



      {/* CONTACT INFORMATION */}
      <Box className='contact' sx={{flexGrow: 1, textAlign: 'center', mt: 25, p: 2}}>
          <Typography variant='h1'>Contact Us</Typography>
          <Typography variant='p' sx={{fontWeight: 'normal'}}>Questions? Concerns? We'd love to hear from you!</Typography>

          <Fade delay={500}>
            <Grid container spacing={10} sx={{p: 10,}}>
              <Grid item xs={12} sm={6} align='right'>

                {/* EMAIL CARD */}
                <Card elevation={10} sx={{minWidth: 250, maxWidth: 300, textAlign: 'center'}}>
                  <CardContent>
                    <EmailIcon sx={{fontSize: 75}}></EmailIcon>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Email us at:</Typography>
                    <Typography variant="p">jgriggsdetailing@gmail.com</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} align='left'>

                {/* PHONE CARD */}
                <Card elevation={10} sx={{minWidth: 250, maxWidth: 300, textAlign: 'center'}}>
                  <CardContent>
                    <PhoneIphoneIcon sx={{fontSize: 75,}}></PhoneIphoneIcon>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Call or Text us at:</Typography>
                    <Typography variant="p">(740)-975-3431</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Fade>
      </Box>

    </Box>
  );
}

export default Home;