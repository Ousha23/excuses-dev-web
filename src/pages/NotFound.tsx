import { Typography } from '@mui/material';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant='h1'>404 - Not Found</Typography>
      <Typography>Page introuvable.</Typography>
    </div>
  );
};

export default NotFound;
