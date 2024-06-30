import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import './styles/services.css';
import education from '../assets/images/overseas.jpeg';
import education1 from '../assets/images/travels.jpg';
import education2 from '../assets/images/airtickets.jpg';
import Footer from '../components/Footer';
import Header from '../components/header';

const services = [
  {
    id: 0,
    title: 'EarthLink Overseas Education',
    image: education,
    resume: 'Providing comprehensive overseas education services.',
    description: 'We offer a range of services to help students pursue their education abroad, including application assistance, visa processing, and accommodation arrangements.Introducing Point To Point Express, Utah’s leading provider of dependable airport shuttle, airport ride, and airport transfer services. At Point To Point Express, our foremost priority is to offer you a seamless, stress-free, and comfortable travel experience, whether you’re traveling for business or leisure. We are dedicated to delivering exceptional service and ensuring your safety throughout your journey aboard our modern, state-of-the-art shuttles. Our commitment to excellence guarantees unparalleled convenience and a truly unforgettable trip. Sure, heres a random text that spans 40 lines:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.'
  },
  {
    id: 1,
    title: 'EarthLink Travels and Tours',
    image: education1,
    resume: 'Specializing in travel and tour services.',
    description: 'We offer a range of services to help students pursue their education abroad, including application assistance, visa processing, and accommodation arrangements.Introducing Point To Point Express, Utah’s leading provider of dependable airport shuttle, airport ride, and airport transfer services. At Point To Point Express, our foremost priority is to offer you a seamless, stress-free, and comfortable travel experience, whether you’re traveling for business or leisure. We are dedicated to delivering exceptional service and ensuring your safety throughout your journey aboard our modern, state-of-the-art shuttles. Our commitment to excellence guarantees unparalleled convenience and a truly unforgettable trip. Sure, heres a random text that spans 40 lines:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.'
  },
  {
    id: 2,
    title: 'EarthLink Business',
    image: education2,
    resume: 'Expert business consultancy and services.',
    description: 'We offer a range of services to help students pursue their education abroad, including application assistance, visa processing, and accommodation arrangements.Introducing Point To Point Express, Utah’s leading provider of dependable airport shuttle, airport ride, and airport transfer services. At Point To Point Express, our foremost priority is to offer you a seamless, stress-free, and comfortable travel experience, whether you’re traveling for business or leisure. We are dedicated to delivering exceptional service and ensuring your safety throughout your journey aboard our modern, state-of-the-art shuttles. Our commitment to excellence guarantees unparalleled convenience and a truly unforgettable trip. Sure, heres a random text that spans 40 lines:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.'
  }
];

export default function Services() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const selectedService = services[selectedTab];

  return (
    <>
      <Header />
      <Box sx={{ padding: '8rem 2rem', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Our Services
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered
          sx={{ marginBottom: '2rem',fontWeight:'bold' }}
        >
          {services.map(service => (
            <Tab key={service.id} label={service.title} />
          ))}
        </Tabs>
        <Box sx={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto' }}>
          <img src={selectedService.image} alt={selectedService.title} style={{ width: '100%',height:600, borderRadius: '8px' }} />
          <Typography variant="h4" gutterBottom sx={{ marginTop: '2rem' }}>
            {selectedService.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {selectedService.resume}
          </Typography>
          <Typography variant="body1" sx={{textAlign:'justify'}}>
            {selectedService.description}
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
