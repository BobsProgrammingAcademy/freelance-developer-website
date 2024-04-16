import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';

import Map from './Map';

const Contact = () => {
  const theme = useTheme();

  const [contact, setContact] = useState([]);

  const fetchContact = () => {
    axios
      .get('http://127.0.0.1:8000/contact', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setContact(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <div id='contact'>
      <Box position='relative' marginBottom={15}>
        <Box
          maxWidth={{ sm: 720, md: 1236 }}
          width={1}
          margin='0 auto'
          paddingX={2}
          paddingY={{ xs: 4, sm: 6, md: 8 }}
          paddingBottom={10}
        >
          <Box marginBottom={4}>
            <Typography
              variant='h3'
              align='center'
              fontWeight={700}
              marginTop={theme.spacing(1)}
              gutterBottom
              data-aos='fade-up'
            >
              Get in touch
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
              marginTop={4}
              marginBottom={6}
              data-aos='fade-up'
            >
              Do you need a full-stack web developer? I would love to hear from
              you.
            </Typography>
          </Box>
          {contact.slice(0, 1).map((item, i) => (
            <Grid container spacing={3} key={i}>
              <Grid item md={4} xs={12}>
                <Box marginTop={3} marginBottom={2} justifyContent='center'>
                  <Typography
                    variant='h4'
                    alignItems='center'
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Contact details
                  </Typography>
                </Box>
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-between'
                >
                  <Box
                    component={ListItem}
                    width='auto'
                    padding={0}
                    marginRight={10}
                    marginBottom={3}
                    disableGutters
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth='auto !important'
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        backgroundColor={theme.palette.primary.main}
                        color={theme.palette.common.white}
                      >
                        <PhoneIcon fontSize='small' />
                      </Box>
                    </Box>
                    <ListItemText primary='Phone' secondary={item.phone} />
                  </Box>
                  <Box
                    component={ListItem}
                    width='auto'
                    padding={0}
                    marginRight={10}
                    marginBottom={3}
                    disableGutters
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth='auto !important'
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        backgroundColor={theme.palette.primary.main}
                        color={theme.palette.common.white}
                      >
                        <EmailIcon fontSize='small' />
                      </Box>
                    </Box>
                    <ListItemText primary='Email' secondary={item.email} />
                  </Box>
                  <Box
                    component={ListItem}
                    width='auto'
                    padding={0}
                    marginBottom={3}
                    disableGutters
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth='auto !important'
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        backgroundColor={theme.palette.primary.main}
                        color={theme.palette.common.white}
                      >
                        <LocationIcon fontSize='small' />
                      </Box>
                    </Box>
                    <ListItemText primary='Location' secondary={item.address} />
                  </Box>
                </Box>
              </Grid>
              <Grid item md={8} xs={12}>
                <Map coordinates={[item.latitude, item.longitude]} zoom={13} />
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
