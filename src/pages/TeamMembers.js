import React from 'react';
import { Box, Typography, Avatar, Grid, Paper, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './styles/team.css';

const teamMembers = [
  {
    image: 'path/to/member1.jpg',
    name: 'John Doe',
    position: 'CEO',
    linkedIn: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    facebook: 'https://facebook.com/johndoe'
  },
  {
    image: 'path/to/member2.jpg',
    name: 'Jane Smith',
    position: 'CTO',
    linkedIn: 'https://linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
    facebook: 'https://facebook.com/janesmith'
  },
  {
    image: 'path/to/member3.jpg',
    name: 'Samuel Green',
    position: 'CFO',
    linkedIn: 'https://linkedin.com/in/samuelgreen',
    twitter: 'https://twitter.com/samuelgreen',
    facebook: 'https://facebook.com/samuelgreen'
  },
  {
    image: 'path/to/member4.jpg',
    name: 'Lisa Brown',
    position: 'COO',
    linkedIn: 'https://linkedin.com/in/lisabrown',
    twitter: 'https://twitter.com/lisabrown',
    facebook: 'https://facebook.com/lisabrown'
  }
];

export default function Team() {
  return (
    <Box
      sx={{
        padding: '4rem 2rem',
        backgroundColor: '#f5f5f5',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom>
        Meet Our Team
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{ marginBottom: '2rem' }}>
        Our team is composed of experienced professionals dedicated to delivering the best results.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper 
              sx={{ 
                padding: '2rem',
                textAlign: 'center',
                borderRadius: '8px'
              }}
              elevation={3}
            >
              <Avatar
                alt={member.name}
                src={member.image}
                sx={{
                  width: '150px',
                  height: '150px',
                  margin: '0 auto 1rem auto'
                }}
              />
              <Typography variant="h6" component="p" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography variant="body1" component="p" color="text.secondary">
                {member.position}
              </Typography>
              <Box sx={{ marginTop: '1rem' }}>
                <IconButton
                  component="a"
                  href={member.linkedIn}
                  target="_blank"
                  sx={{ color: '#0e76a8' }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={member.twitter}
                  target="_blank"
                  sx={{ color: '#00acee' }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={member.facebook}
                  target="_blank"
                  sx={{ color: '#3b5998' }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
