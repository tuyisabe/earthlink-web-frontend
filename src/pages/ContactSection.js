// src/ContactSection.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -1.9416928631456771, 
  lng: 30.058937943769592,
};

const ContactSection = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h3" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '2rem' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Office
            </Typography>
            <Typography variant="body1" component="p">
            3355+79M CHIC Building, CHIC Building-Kigali, 1st Floor E046A2, Kigali

            </Typography>
            <Typography variant="body1" component="p" sx={{ mt: 2 }}>
              Phone: +250 788 447 599<br />
              Email: info@earthlinkgroup.com
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <LoadScript googleMapsApiKey="AIzaSyCTADbj_YP9U3EbGgoJrG4d7lgs0-BuR28">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
