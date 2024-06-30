import React from 'react';
import { Box, Typography, TextField, Button, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: '#ffffff',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <List style={{marginLeft:'38%'}}>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
          3355+79M CHIC Building, CHIC Building-Kigali, 1st Floor E046A2, Kigali
          </Typography>
          <Typography variant="body1">
            Email: info@earthlinkgroup.com
          </Typography>
          <Typography variant="body1">
            Phone: +250 788 447 599
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Box>
          <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>
            Subscribe to our Newsletter
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              maxWidth: '500px',
              margin: '0 auto'
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Email Address"
              variant="outlined"
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                width: '70%',
                marginBottom: '1rem'
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ height: '56px', marginBottom: '1rem' }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ marginTop: '2rem' }}>
        © {new Date().getFullYear()} EarthLink Group. All rights reserved.
      </Typography>
    </Box>
  );
}
