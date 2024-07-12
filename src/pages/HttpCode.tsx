import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const HttpCode: React.FC = () => {
  const { http_code } = useParams<{ http_code: string }>();
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/excuses/${http_code}`);
        if (!response.data.message){
          navigate('/*');
          return;
        }
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, [http_code]);

  useEffect(() => {
    if (!loading && message === null ){
      navigate('/lost')
    }
  }, [loading, message, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant='h1'>HTTP Code: {http_code}</Typography>
      <Typography variant='h2'>{message}</Typography>
    </div>
  );
};

export default HttpCode;
