import { Button } from '@mui/material';
import React from 'react';

interface ExcuseButtonProps {
  onClick: () => void;
}

const ExcuseButton: React.FC<ExcuseButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} style={{ marginTop: '20px' }} color='primary'>
      Générer une excuse
    </Button>
  );
};

export default ExcuseButton;
