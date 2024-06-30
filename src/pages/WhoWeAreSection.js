// src/WhoWeAre.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import image1 from '../assets/images/about3.jpg';
import image2 from '../assets/images/about2.jpg';
//import './styles/whoweare.css';

export default function WhoWeAre() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '2rem', md: '4rem 2rem' },
        backgroundColor: '#f5f5f5',
        height: { xs: 'auto', md: '100vh' },
      }}
    >
      <Box
        sx={{
          flex: 1,
          paddingRight: { xs: '0', md: '2rem' },
          margin: { xs: '2rem 0', md: '2rem 6rem' },
          paddingBottom: { xs: '2rem', md: '0' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h3" component="h2" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="h6" component="h3" style={{ marginBottom: 20 }}>
          We are a company committed to delivering the best services to our clients.
          Our team is composed of skilled professionals dedicated to achieving excellence
          in every project we undertake.
        </Typography>
        <Typography variant="body1" component="h3">
          We are a company committed to delivering the best services to our clients.
          Our team is composed of skilled professionals dedicated to achieving excellence
          in every project we undertake. We believe in innovation, integrity, and
          customer satisfaction.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={image1}
          alt="Image 1"
          className="image1"
          sx={{
            width: { xs: '100%', md: '350px' },
            height: 'auto',
            position: { xs: 'static', md: 'absolute' },
            top: { xs: 0, md: '140px' },
            left: { xs: '10%', md: '-10%' },
            zIndex: 2,
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            borderRadius: '10px',
          }}
        />
        <Box
          component="img"
          src={image2}
          alt="Image 2"
          className="image2"
          sx={{
            width: { xs: '100%', md: '450px' },
            height: 'auto',
            position: { xs: 'static', md: 'relative' },
            zIndex: 1,
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            borderRadius: '10px',
            marginTop: { xs: '2rem', md: '0' },
          }}
        />
      </Box>
    </Box>
  );
}
