// src/ServicesSection.js
import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import overseasImage from '../assets/images/overseas.jpeg';
import travelsImage from '../assets/images/travels.jpg';
import airticketsImage from '../assets/images/airtickets.jpg';

export default function ServicesSection() {
  return (
    <Box sx={{ backgroundColor:"f5f5f5"}}>
      <Typography variant="h3" component="h2" gutterBottom style={{marginLeft:'5%',marginTop:20}}>
        Services
      </Typography>
      <Stack 
        sx={{ 
          display: 'flex', 
          gap: '50px', // corrected gap property 
          flexDirection: { xs: 'column', md: 'row' }, 
          marginLeft: '5%', 
          marginRight: '5%', 
          marginTop: '5%', 
          justifyContent: 'space-between', 
          marginBottom: '5%' 
        }}
      >
        <Paper sx={{ maxWidth: 400 }} elevation={20}>
          <CardMedia
            component="img"
            alt="EarthLink travels and tours"
            height="200"
            image={travelsImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              EarthLink travels and tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Paper>

        <Paper sx={{ maxWidth: 400 }} elevation={20}>
          <CardMedia
            component="img"
            alt="EarthLink overseas education"
            height="200"
            image={overseasImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              EarthLink overseas education
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Paper>

        <Paper sx={{ maxWidth: 400 }} elevation={20}>
          <CardMedia
            component="img"
            alt="EarthLink business"
            height="200"
            image={airticketsImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              EarthLink business
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Paper>
      </Stack>
    </Box>
  );
}
