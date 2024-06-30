// src/Hello.js
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import backgroundVideo from '../assets/images/background_video.mp4';
import backgroundVideo1 from '../assets/images/background_video.mov';
import backgroundVideo2 from '../assets/images/background_video1.mp4';

import './styles/hello.css';

export default function Hello(props) {
  const slides = [
    {
      video: backgroundVideo2,
      title: 'EarthLink travels and tours',
      text: "EarthLink travels and tours is a leading provider of international student education programmes. We are passionate about helping students achieve their own goals, which has led us to create innovative pathways for success that extend far beyond just numbers on a page.",
    },
    {
      video: backgroundVideo1,
      title: 'EarthLink overseas education',
      text: "EarthLink overseas education has a multifaceted offering. We're a nimble organisation with an eye for the future. Our breadth and diversity makes us able to tackle any challenge, no matter how global or niche-we specialize in education.",
    },
    {
      video: backgroundVideo,
      title: 'EarthLink business',
      text: "EarthLink business has a multifaceted offering. We're a nimble organisation with an eye for the future. Our breadth and diversity makes us able to tackle any challenge, no matter how global or niche-we specialize in education.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box sx={{ backgroundSize: 'cover', position: 'relative', height: '100vh', width: '100%' }}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            display: index === currentIndex ? 'block' : 'none',
            position: 'relative',
            height: '100%',
            width: '100%',
          }}
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover absolute top-0 left-0"
            src={slide.video}
            style={{ height: '100%', width: '100%' }}
          />
          <Box
            sx={{
              width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              textAlign: 'center',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Typography variant="h3" sx={{ marginBottom: 2 }}>
              {slide.title}
            </Typography>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              {slide.text}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#1976d2' : '#fff',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
