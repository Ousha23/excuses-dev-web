import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import axios from 'axios';

interface Excuse {
  httpCode: number;
  tag: string;
  message: string;
}

interface ExcuseFormModalProps {
  open: boolean;
  onClose: () => void;
  onAddExcuse: (excuse: Excuse) => void;
}

const ExcuseFormModal: React.FC<ExcuseFormModalProps> = ({ open, onClose, onAddExcuse }) => {
  const [httpCode, setHttpCode] = useState<number>(0); // Initialize with 0 or any default value
  const [tag, setTag] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleAddExcuse = () => {
    const newExcuse: Excuse = { httpCode, tag, message };
    axios.post('http://localhost:3000/excuses', newExcuse)
      .then(response => {
        onAddExcuse(newExcuse);
        onClose();
      })
      .catch(error => {
        console.error('Error adding excuse:', error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Ajouter une excuse</h2>
        <TextField
          label="HTTP Code"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={httpCode}
          onChange={(e) => setHttpCode(parseInt(e.target.value))}
        />
        <TextField
          label="Tag"
          variant="outlined"
          fullWidth
          margin="normal"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleAddExcuse} variant="contained" color="primary">
          Valider
        </Button>
      </Box>
    </Modal>
  );
};

export default ExcuseFormModal;
