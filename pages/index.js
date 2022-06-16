import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Grid, useTheme, MobileStepper, Paper, Card, CardContent,} from '@mui/material'
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';

import logo from '/assets/car-logo.svg'
import Image from 'next/dist/client/image';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Tesla',
    imgPath: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/Full-HD-Wallpapers-1080p-Cars.jpg',
  },
];

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  return (
      <Box sx={{ flexGrow: 1 }}>

        {/* HOME PAGE NAV BAR */}
        <AppBar position="static">
          <Toolbar>
            <Image src={logo} height={50} width={50}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>Griggs Detailing</Typography>
            <Button sx={{ fontWeight: 'bold' }} color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>

        {/* PHOTO CAROUSEL */}
        <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
          justifyContent: 'center'
        }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 100,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />

          {/* CONTACT INFORMATION */}
          <Box sx={{flexGrow: 1, textAlign: 'center', mt: 10, p: 2}}>
            <Paper>
              <Typography variant='h1'>Contact Us</Typography>
              <Typography variant='p'>Questions? Concerns? We'd love to hear from you!</Typography>

              <Grid container spacing={10} sx={{p: 5,}}>
                <Grid item md={6}>

                  {/* EMAIL CARD */}
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <EmailIcon sx={{fontSize: 75}}></EmailIcon>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Email us at:</Typography>
                      <Typography variant="p">example@gmail.com</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>

                  {/* PHONE CARD */}
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <PhoneIphoneIcon sx={{fontSize: 75,}}></PhoneIphoneIcon>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Call or Text us at:</Typography>
                      <Typography variant="p">(123)-456-7890</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Box>

      </Box>
  );
}

export default Home;