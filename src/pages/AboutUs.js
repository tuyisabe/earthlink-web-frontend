import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import { Box, Typography, Grid, Paper } from '@mui/material';
import aboutImage from '../assets/images/about.jpeg';

export default function AboutUs() {
  return (
    <div>
      <Header/>
    <Box 
      sx={{ 
        padding: '8rem 2rem', 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <img src={aboutImage} alt="About Us" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'left' }}>
            <Typography variant="h4" component="h3" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1" paragraph>
              We are a company committed to delivering the best services to our clients. Our team is composed of skilled professionals dedicated to achieving excellence in every project we undertake. We believe in innovation, integrity, and customer satisfaction.
            </Typography>
            <Typography variant="h4" component="h3" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to provide exceptional services that exceed our clients' expectations. We strive to create a positive impact through our work, fostering a culture of excellence and continuous improvement.
            </Typography>
            <Typography variant="h4" component="h3" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1">
              Our vision is to be a leading company in our industry, known for our commitment to quality, innovation, and customer satisfaction. We aim to set new standards of excellence and be a trusted partner for our clients.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
      <Footer/>
    </div> 
  )
}
