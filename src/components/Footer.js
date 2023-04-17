import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assests/images/main footer.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#fff">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '100px' }} />
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">-By Shivansh Vashishtha</Typography>
    </Stack>
    
  </Box>
);

export default Footer;