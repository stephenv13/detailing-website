import {Box, Typography, Grid, Card, CardContent,} from '@mui/material'

import Fade from 'react-reveal/Fade'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function ContactUs() {
        return (

            <Box className='contact' sx={{flexGrow: 1, textAlign: 'center', mt: 20, p: 2}}>
                <Typography variant='h1'>Contact Us</Typography>
                <Typography variant='p' sx={{fontWeight: 'normal'}}>Questions? Concerns? We&apos;d love to hear from you!</Typography>

                <Fade delay={500}>
                    <Grid container spacing={1} sx={{p: 10,}}>
                    <Grid item xs={12} sm={6} align='center'>

                        {/* EMAIL CARD */}
                        <Card elevation={10} sx={{minWidth: 250, maxWidth: 300, textAlign: 'center'}}>
                        <CardContent>
                            <EmailIcon className='emailIcon' sx={{fontSize: 75}}></EmailIcon>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Email us at:</Typography>
                            <Typography variant="p">jgriggsdetailing@gmail.com</Typography>
                        </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} align='center'>

                        {/* PHONE CARD */}
                        <Card elevation={10} sx={{minWidth: 250, maxWidth: 300, textAlign: 'center'}}>
                        <CardContent>
                            <PhoneIphoneIcon className='phoneIcon' sx={{fontSize: 75,}}></PhoneIphoneIcon>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Call or Text us at:</Typography>
                            <Typography variant="p">(740)-975-3431</Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    </Grid>
                </Fade>
            </Box>
        );
}