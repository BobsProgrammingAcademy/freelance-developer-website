import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Projects = () => {
  const theme = useTheme();

  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios
      .get('http://127.0.0.1:8000/projects', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div id='projects'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h2'
            align='center'
            fontWeight={700}
            marginTop={theme.spacing(1)}         
            gutterBottom
            data-aos='fade-up'
          >
            Projects
          </Typography>
          <Typography
            variant='h5'
            color={theme.palette.text.secondary}
            align='center'         
            marginTop={4}
            marginBottom={6}
            data-aos='fade-up'
          >
            View some of my latest projects
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projects.map((item, i) => (
            <Grid key={i} item xs={12}>
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
                  width={1}
                  height={1}
                  borderRadius={0}
                  boxShadow={0}
                  display='flex'
                  flexDirection={{
                    xs: 'column',
                    md: i % 2 === 0 ? 'row-reverse' : 'row',
                  }}
                  sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
                >
                  <Box
                    sx={{
                      width: { xs: 1, md: '50%' },
                      '& .lazy-load-image-loaded': {
                        height: 1,
                        display: 'flex !important',
                      },
                    }}
                  >
                    <Box
                      component={LazyLoadImage}
                      height={1}
                      width={1}
                      src={item.image}
                      alt='project image'
                      effect='blur'
                      sx={{
                        objectFit: 'cover',
                        maxHeight: 360,
                        borderRadius: 2,
                        filter: 'none',
                        transition: 'opacity, transform ease 0.3s !important',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        },
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      paddingX: { xs: 1, sm: 2, md: 4 },
                      paddingY: { xs: 2, sm: 4 },
                      width: { xs: 1, md: '50%' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant='h6'
                      fontWeight={700}
                      marginBottom={1}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      {item.name}
                    </Typography>
                    <Typography color='text.secondary'>
                      {item.description}
                    </Typography>
                    <Box marginTop={3} marginBottom={1}>
                      {item.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag.name}
                          component='a'
                          href=''
                          clickable
                          size='small'
                          color='primary'
                          sx={{
                            marginBottom: 1,
                            marginRight: 1,
                            '&:hover': {
                              backgroundColor: 'transparent',
                              color: theme.palette.primary.main,
                              border: `1px solid ${theme.palette.primary.main}`,
                            },
                          }}
                        />
                      ))}
                    </Box>
                    <Box marginTop={2} display='flex' justifyContent='flex-end'>
                      <Button
                        component='a'
                        href={item.link}
                        target='_blank'
                        endIcon={
                          <Box
                            component={'svg'}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            width={24}
                            height={24}
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                          </Box>
                        }
                      >
                        Source Code
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};

export default Projects;
