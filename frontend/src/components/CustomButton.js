import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const CustomButton = ({ href, icon, text }) => {
  const theme = useTheme();

  return (
    <Button
      component='a'
      color='primary'
      href={href}
      size='small'
      variant='text'
      sx={{
        color: theme.palette.text.secondary,
        fontSize: theme.typography.h4,
        fontWeight: '600',
        textTransform: 'none',
        marginRight: 2,
        '&:active': {
          color: theme.palette.primary.main,
        },
        '&:hover': {
          color: theme.palette.primary.main,
        },
        '& svg': {
          marginRight: 0.5,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
