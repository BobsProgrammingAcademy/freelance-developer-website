import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeroButtons from './HeroButtons';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [hero, setHero] = useState([]);

  const fetchHero = () => {
    axios
      .get('http://127.0.0.1:8000/hero', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setHero(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchHero();
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id='home'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={4}
      >
        {hero.slice(0, 1).map((item, i) => (
          <Grid container key={i} spacing={4}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                <Box marginBottom={2}>
                  <Typography
                    color={theme.palette.text.primary}
                    variant='h1'
                    fontWeight={700}
                    marginTop={3}
                    align='center'
                  >
                    {item.title}{' '}
                  </Typography>
                  <Typography
                    color={theme.palette.primary.main}
                    variant='h1'
                    fontWeight={700}
                    align='center'
                    marginBottom={3}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box marginBottom={3}>
                  <Typography
                    variant='h4'
                    component='p'
                    color={theme.palette.text.secondary}
                    align='justify'
                  >
                    {item.description}
                  </Typography>
                </Box>
                <HeroButtons />
              </Box>
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              justifyContent='center'
              xs={12}
              md={6}
              sx={{ order: { xs: 1, md: 2 } }}
            >
              <Box
                sx={{
                  height: { xs: 'auto', md: 1 },
                  '& img': {
                    objectFit: 'cover',
                  },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  src={item.image}
                  alt='Background Image'
                  effect='blur'
                  height={{ xs: 'auto', md: 1 }}
                  maxHeight={{ xs: 300, md: 1 }}
                  width={1}
                  maxWidth={1}
                  borderRadius={2}
                />
              </Box>
            </Grid>
          </Grid>
        ))}
        <Divider sx={{ marginTop: 6 }} />
      </Box>
    </div>
  );
};

export default Hero;
