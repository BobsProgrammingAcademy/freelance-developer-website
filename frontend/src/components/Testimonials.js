import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCommentDots);

const Testimonials = () => {
  const theme = useTheme();
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = () => {
    axios
      .get('http://127.0.0.1:8000/testimonials', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div id='testimonials'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant='h2'
              align='center'
              fontWeight={700}
              marginTop='-30px'      
              gutterBottom
              data-aos='fade-up'
            >
              Testimonials
            </Typography>
            <Typography
              variant='h4'
              color={theme.palette.text.secondary}
              align='center'             
              marginTop={4}
              marginBottom={6}
              data-aos='fade-up'
            >
              Check what clients have said about my work
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {testimonials.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box
                  display='block'
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    component={Card}
                    variant='outlined'
                    padding={4}
                    borderRadius={2}
                    width={1}
                    height={1}
                    data-aos='fade-up'
                    data-aos-delay={i * 100}
                    data-aos-offset={100}
                    data-aos-duration={600}
                  >
                    <Box display='flex' flexDirection='column'>
                      <Box marginBottom={2}>
                        <FontAwesomeIcon
                          icon={faCommentDots}
                          style={{
                            color: theme.palette.primary.main,
                            height: 45,
                            width: 45,
                          }}
                        />
                      </Box>
                      <Typography
                        color={theme.palette.text.secondary}
                        gutterBottom
                      >
                        {item.testimonial}
                      </Typography>
                      <ListItem
                        component='div'
                        disableGutters
                        sx={{ padding: 0, marginTop: 1 }}
                      >
                        <ListItemAvatar>
                          <Avatar src={item.author_photo} />
                        </ListItemAvatar>
                        <ListItemText
                          sx={{ margin: 0 }}
                          primary={item.author_name}
                          secondary={item.author_title}
                        />
                      </ListItem>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Testimonials;
