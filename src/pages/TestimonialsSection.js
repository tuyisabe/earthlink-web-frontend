// src/Testimonials.js
import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import Slider from 'react-slick';
import './styles/testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    image: 'path/to/user1.jpg',
    message: 'This company provided excellent service and support. Highly recommended!',
    name: 'Kalisa Nana',
  },
  {
    image: 'path/to/user2.jpg',
    message: 'Amazing experience! The team was very professional and helpful.',
    name: 'Jane Smith',
  },
  {
    image: 'path/to/user3.jpg',
    message: 'I am very satisfied with the results. Great job! very professional and helpful.',
    name: 'Robert Brown',
  },
  {
    image: 'path/to/user3.jpg',
    message: 'I am very satisfied with the results. Great job! very professional and helpful.',
    name: 'Abayo Emery',
  },
  {
    image: 'path/to/user3.jpg',
    message: 'I am very satisfied with the results. Great job! very professional and helpful.',
    name: 'Keza Gaby',
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    }
  ]
};

export default function Testimonials() {
  return (
    <Box
      sx={{
        padding: '4rem 2rem',
        backgroundColor: '#ffffff'
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom sx={{ margin: '20px' }}>
        Testimonials
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
            <Paper
              elevation={3}
              sx={{
                maxWidth: '300px',
                textAlign: 'center',
                padding: '20px',
                margin: '0 auto',
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.image}
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 1rem auto'
                }}
              />
              <Typography variant="h6" component="p" fontWeight="bold">
                {testimonial.name}
              </Typography>
              <Typography variant="body1" component="p" gutterBottom sx={{ fontFamily: 'Veronika Burian' }}>
                "{testimonial.message}"
              </Typography>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
