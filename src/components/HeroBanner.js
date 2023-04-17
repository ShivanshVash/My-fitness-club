import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assests/images/Chris-Bumstead-Wallpaper.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    
    <Typography color="#ff0000" fontWeight="600" fontSize="26px"><h2>My Fitness Club</h2></Typography>
    <Typography color="#ffffff" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    The real workout starts <br />
    when you want to stop....
      
    </Typography>
    <Typography color="#808080" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you.
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.08', display: { lg: 'block', xs: 'none' }, fontSize: '150px' }}>
      SWEAT<br/>
      SMILE
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;