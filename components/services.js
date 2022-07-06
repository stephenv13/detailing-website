import {Card, CardContent, CardActions, Typography, Button, Grid, Stack, Fade} from '@mui/material'
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';

import ServiceFormModal from './modal';

export default function Services() {
    const services = require('./data/services.json')

        return (
                <Grid container spacing={10} sx={{p: 5,}}>
                {services.map((service,id) => {

                    return (
                        
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} sx={{display: 'flex', justifyContent: 'center'}}  key={id}>
                            <Card 
                                sx={{textAlign: 'center', display: 'flex', flexDirection: 'column', width: {
                                    sx: 1.0,
                                    xs: 350,
                                    sm: 400,
                                    md: 450,
                                    lg: 500,
                                    xl: 550
                                }}} elevation={20}
                                className='serviceCard'>
                                    
                                    <CardContent className='cardText'>
                                        <LocalCarWashIcon className='carIcon' sx={{fontSize: 60,}}></LocalCarWashIcon>
                                        <Typography sx={{fontSize: 25, fontWeight: 'bold'}}>{service.service_name}</Typography>
                                        <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>{service.completion_time} Hours to Complete</Typography>
                                        <Typography sx={{fontSize: 15}} gutterBottom> <br></br>This package includes:</Typography>


                                        <ul style={{fontSize: 15, display:'inline-block', textAlign: 'left'}}>
                                            {service.includes.map((action, i) => {
                                                return <li key={i}>{action}</li>

                                            })}
                                        </ul>

                                        

                                    </CardContent>
                                    <CardActions sx={{mt: 'auto', mb: 2, justifyContent: 'center'}}>
                                        <Stack>
                                        <Typography sx={{fontSize: 15, fontWeight: 'bold', mb: 2}}>Starting Price: {service.price}</Typography>
                                        {/* <Button variant='contained'>Schedule Now</Button> */}
                                        <ServiceFormModal serviceName = {service.service_name}></ServiceFormModal>
                                        </Stack>
                                    </CardActions>

                            </Card>
                        </Grid>
                        

                    );
                })}
                </Grid>
        );
}