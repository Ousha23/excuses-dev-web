import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Lost: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Je suis perdu !!</h1>
      <img src="https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif" alt="Lost gif" />
    </div>
  );
};

export default Lost;
