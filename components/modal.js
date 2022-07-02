import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Typography, MenuItem, Select, InputLabel, FormControl, Alert, AlertTitle, Snackbar, IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import emailjs from '@emailjs/browser'

// forms start with blank default values
const formValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  make: "",
  model: "",
  year: "",
  comments: ""
};

export default function ServiceFormModal({serviceName}) {

  // variable and set variable definitions
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const [firstName, setFirstName] = useState(formValues.firstName);
  const [lastName, setLastName] = useState(formValues.lastName);
  const [email, setEmail] = useState(formValues.email);
  const [phone, setPhone] = useState(formValues.phone);
  const [make, setMake] = useState(formValues.make);
  const [model, setModel] = useState(formValues.model);
  const [year, setYear] = useState(formValues.year);
  const [comments, setComments] = useState(formValues.comments);


  const changeFirstName = event => {
    setFirstName(formValues.firstName = event.target.value);
  };

  const changeLastName = event => {
    setLastName(formValues.lastName = event.target.value);
  };

  const changeEmail = event => {
    setEmail(formValues.email = event.target.value);
  };

  const changePhone = event => {
    setPhone(formValues.phone = event.target.value);
  };

  const changeMake = event => {
    setMake(formValues.make = event.target.value);
  };

  const changeModel = event => {
    setModel(formValues.model = event.target.value);
  };

  const changeYear = event => {
    setYear(formValues.year = event.target.value);
  };

  const changeComments = event => {
    setComments(formValues.comments = event.target.value);
  };

  // FUNCTIONS

  const snackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={snackClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const resetValues = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMake("");
    setModel("");
    setYear("");
    setComments("");
  }

  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = (event) => {
    setOpen(false);
    resetValues();
  };

  // FORM SUBMIT FUNCTION
  const Submit = (event) => {
    // event.preventDefault();
    setOpen(false);
    setSnackbar(true);

    var templateParams = {
      to_name: 'Josh',
      customer_name: formValues.firstName + ' ' + formValues.lastName,
      service_name: serviceName,
      email: formValues.email,
      phone: formValues.phone,
      car_make: formValues.make,
      car_model: formValues.model,
      car_year: formValues.year,
      comments: formValues.comments
    };

    // on submit, use email.js to send form in an email
    emailjs.send('service_hzpjk9n', 'template_spnm0dv', templateParams, 'mYk732YmVuzbdwbjK')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    resetValues();
  };



  // makes an array of years based on a starting year and current year
  const years = function(startYear) {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;  
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }   
    return years;
  }

  // define json files
  const makes = require('./data/makes.json')
  const models = require('./data/models.json')

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>Request Service</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{fontWeight: 'bold'}}>Request Service: {serviceName}</DialogTitle>

        <Grid>
          <Grid item xs={12}>
            <DialogContent sx={{width: {
              sx: 1.0,
              xs: 300,
              sm: 600
            }}}>
            <DialogContentText>
              To request a service, please fill out the form below:
            </DialogContentText>

              {/* PERSONAL INFORMATION */}
              <Typography sx={{mt: 4, fontWeight: 'bold'}}>Personal Information</Typography>

                <Grid container spacing={1}>
                  {/* FIRST NAME */}
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={firstName}
                    onChange={changeFirstName}
                    />
                  </Grid>

                  {/* LAST NAME */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      autoFocus
                      margin="dense"
                      id="lastName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={lastName}
                      onChange={changeLastName}
                    />
                  </Grid>
                </Grid>

                {/* EMAIL */}
                <TextField
                  required
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  value={email}
                  onChange={changeEmail}
                />

                {/* PHONE NUMBER */}
                <TextField
                  required
                  autoFocus
                  margin="dense"
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  fullWidth
                  variant="standard"
                  value={phone}
                  onChange={changePhone}
                />
                <Typography sx={{fontSize: 11}}>Ex. 123-456-7890</Typography>

                {/* CAR INFORMATION */}
                <Typography sx={{mt: 4, fontWeight: 'bold'}}>Car Information</Typography>

                <Grid container spacing={1}>

                  {/* CAR MAKE */}
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth required variant='standard' autoFocus margin='dense'>
                      <InputLabel id="make">Car Make</InputLabel>
                      <Select
                        labelId='make'
                        name="make"
                        label= "Car Make"
                        value={make}
                        onChange={changeMake}
                        >

                          {/* map each car make for the selector menu */}
                          {makes.map((item) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                    </FormControl>
                  </Grid>

                  {/* CAR MODEL */}
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth required variant='standard' autoFocus margin='dense'>
                      <InputLabel id="model">Car Model</InputLabel>
                      <Select
                        labelId='model'
                        name='model'
                        label="Car Model"
                        value={model}
                        onChange={changeModel}
                        >
                          {/* use make key value and map each car model for that make */}
                          {models[make]
                          ? models[make].map(function(item) {
                            return <MenuItem key={item} value={item}>{item}</MenuItem>
                          })
                          : ""}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  {/* CAR YEAR */}
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth required variant='standard' autoFocus margin='dense'>
                      <InputLabel id="year">Year</InputLabel>
                      <Select
                        labelId='year'
                        name='year'
                        label="Year"
                        value={year}
                        onChange={changeYear}
                      >
                        {years().map((year) =>
                          <MenuItem key={year} value={year}>{year}</MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  </Grid>

                </Grid>
                  {/* ADDITIONAL COMMENTS */}
                  <Typography sx={{mt: 4, fontWeight: 'bold'}}>Additional Comments</Typography>

                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="comments"
                        label="Comments"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={comments}
                        onChange={changeComments}
                        multiline
                        minRows={4}
                      />
                  </Grid>

                </Grid>

            </DialogContent>
          </Grid>
        </Grid>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant= 'contained' onClick={Submit} type='submit'>Submit</Button>
        </DialogActions>
      </Dialog>
      
      {/* FORM SUBMITTAL SUCCESS BANNER */}
      <Snackbar
        open={snackbar}
        autoHideDuration={10000}
        onClose={snackClose}
        message="Note archived"
        action={action}
      >
        <Alert severity="success">
          <AlertTitle>Request Submitted</AlertTitle>
          We will be in touch soon to schedule your service! <strong>Thank you!</strong>
          </Alert>
      </Snackbar>

    </div>
  );
}