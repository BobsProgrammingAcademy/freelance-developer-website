import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  const [footer, setFooter] = useState([]);

  const fetchFooter = () => {
    axios
      .get('http://127.0.0.1:8000/footer', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setFooter(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <React.Fragment>
      <Box
        backgroundColor={theme.palette.background.default}
        paddingTop='1px'
        paddingBottom='1px'
        // sticky footer - see four values below
        position='fixed'
        bottom='0'
        left='0'
        width='100%'
      >
        <Divider />
        <Box
          backgroundColor={theme.palette.background.default}
          position='relative'
          padding={theme.spacing(0.25)}
        >
          {footer.slice(0, 1).map((item, index) => (
            <Grid container spacing={0} key={index}>
              <Hidden mdDown>
                <Grid container item xs={12} md={4}>
                  <List
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: 0,
                    }}
                  >
                    <ListItemButton component='a' href='#'>
                      <ListItemText
                        primary={
                          <Typography
                            variant='body2'
                            color={theme.palette.text.secondary}
                          >
                            Privacy Policy
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton component='a' href='#'>
                      <ListItemText
                        primary={
                          <Typography
                            variant='body2'
                            color={theme.palette.text.secondary}
                          >
                            Terms of Use
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </Grid>
              </Hidden>
              <Grid container item xs={12} md={4} justifyContent='center'>
                <List>
                  <ListItemButton>
                    <ListItemText
                      primary={
                        <Typography
                          variant='body2'
                          color={theme.palette.text.secondary}
                        >
                          Copyright &copy; {new Date().getFullYear()}{' '}
                          {item.copyright}.
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
              </Grid>
              <Grid container item xs={12} md={4} justifyContent='center'>
                <List>
                  <ListItemButton>
                    <ListItemText
                      primary={
                        <Typography
                          variant='body2'
                          color={theme.palette.text.secondary}
                        >
                          Photo by{' '}
                          <Link
                            href={item.image_author_link}
                            alt={item.image_author_name}
                            target='_blank'
                            rel='noreferrer'
                            color={theme.palette.text.secondary}
                          >
                            {item.image_author_name}
                          </Link>{' '}
                          on{' '}
                          <Link
                            href={item.image_website_link}
                            alt={item.image_website_name}
                            target='_blank'
                            rel='noreferrer'
                            color={theme.palette.text.secondary}
                          >
                            {item.image_website_name}
                          </Link>
                          .
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
