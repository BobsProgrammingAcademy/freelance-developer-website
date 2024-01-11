import React from 'react';
import PropTypes from 'prop-types';
//import Link from "next/link";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import CustomButton from '../components/CustomButton';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faLaptopCode);

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 280,
          },
        }}
      >
        <Box sx={{ height: '100%', padding: 1 }}>
          <Box width={1} paddingX={2} paddingY={1}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  style={{
                    color: theme.palette.primary.main,
                    height: 45,
                    width: 45,
                  }}
                />
                <Typography
                  variant='h3'
                  color={theme.palette.primary.main}
                  fontWeight={700}
                  textDecoration='none'
                  flexGrow={1}
                  marginLeft='10px'
                >
                  Bob Developer
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingX={2} paddingY={2}>
            <CustomButton href='#home' text='Home' />
            <Box paddingY={1}>
              <CustomButton href='#about' text='About' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#projects' text='Projects' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#technologies' text='Technologies' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#testimonials' text='Testimonials' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#contact' text='Contact' />
            </Box>
            <Box>
              <Stack direction='row' spacing={1}>
                <IconButton
                  aria-label='YouTube'
                  href='#'
                  target='_blank'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <YouTubeIcon fontSize='large' />
                </IconButton>
                <IconButton
                  aria-label='LinkedIn'
                  href='#'
                  target='_blank'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <LinkedInIcon fontSize='large' />
                </IconButton>
                <IconButton
                  aria-label='Instagram'
                  href='#'
                  target='_blank'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <InstagramIcon fontSize='large' />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;
