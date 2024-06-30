// import React from 'react'
// import Header from '../components/header'
// import Footer from '../components/Footer'

// export default function Contact() {
//   return (
//     <div>

//       Contact page
//       <Footer/>
//     </div>
//   )
  import React from 'react';
  import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
  import { styled } from '@mui/system';
  import SendIcon from '@mui/icons-material/Send';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import EmailIcon from '@mui/icons-material/Email';
  import PhoneIcon from '@mui/icons-material/Phone';
import Header from '../components/header';
import Footer from '../components/Footer';
  
  const FormPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  }));
  
  export default function ContactUs() {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here (e.g., send data to the server)
    };
  
    return ( 
        <>
    <Header/>
      <Box sx={{ padding: '8rem 2rem', backgroundColor: '#f5f5f5' }}>
       
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Contact Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <FormPaper elevation={3}>
              <Typography variant="h6" component="p" gutterBottom>
                Send Us a Message
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
              Please if you have any suggestion or a prblem provide the following information and your suggestion or a problem

              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ marginBottom: '1rem' }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  sx={{ marginBottom: '1rem' }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  sx={{ marginBottom: '1rem' }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Box>
            </FormPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormPaper elevation={3}>
              <Typography variant="h6" component="p" gutterBottom>
                Contact Information
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <LocationOnIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" component="p">
                3355+79M CHIC Building, CHIC Building-Kigali, 1st Floor E046A2, Kigali
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <EmailIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" component="p">
                info@earthlinkgroup.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" component="p">
                +250 788 447 599
                </Typography>
              </Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867077304636!2d144.96328!3d-37.813628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779b971c43c2a7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1624152117638!5m2!1sen!2sau"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location"
              ></iframe>
            </FormPaper>
          </Grid>
        </Grid>
       
      </Box> 
      <Footer/>
      </>
    );
  }
  

