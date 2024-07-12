import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExcuseButton from './ExcuseButton';
import { ClipLoader } from 'react-spinners';
import { Button, Fade, Typography } from '@mui/material';
import ExcuseFormModal from './ExcuseFormModal';

interface Excuse {
  httpCode: number;
  message: string;
  tag: string;
}

const ExcuseGenerator: React.FC = () => {
  const [excuses, setExcuses] = useState<Excuse[]>([]);
  const [currentExcuse, setCurrentExcuse] = useState<Excuse | null>(null);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] =useState(false);

  useEffect(() => {
    axios.get<Excuse[]>('http://localhost:3000/excuses')
      .then(response => setExcuses(response.data))
      .catch(error => console.error('Error fetching excuses:', error));
  }, []);

  const generateExcuse = () => {
    if (excuses.length > 0) {
      setLoading(true);
      const randomIndex = Math.floor(Math.random() * excuses.length);
      setTimeout(() => {
        setCurrentExcuse(excuses[randomIndex]);
        setLoading(false);
      }, Math.random() * 4000 + 1000);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddExcuse = (newExcuse: Excuse) => {
    setExcuses([...excuses, newExcuse]);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Fade in={true} timeout={1500}>
        <Typography variant="h1" style={{ marginBottom: '20px' }}>
          Les excuses de dev
        </Typography>
      </Fade>
      {loading ? (
        <ClipLoader size={50} color='secondary' loading={loading} />
      ) : (
        currentExcuse && <Typography>{currentExcuse.message}</Typography>
      )}
      {showButton && !loading && (
      <>
      <ExcuseButton onClick={generateExcuse} />
      <Button onClick={() => setModalOpen(true)} style={{ marginTop: '20px' }} color='primary'>
        ajouter une excuse
      </Button>
      </>
      )}
      <ExcuseFormModal 
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      onAddExcuse={handleAddExcuse}
      ></ExcuseFormModal>
    </div>
  );
};

export default ExcuseGenerator;
