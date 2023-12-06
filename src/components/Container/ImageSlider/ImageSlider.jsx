import { useState, useEffect } from 'react';

import imgg from '~/assets/img/img1.jpg';
import imggg from '~/assets/img/img2.jpg';
import imggs from '~/assets/img/img3.jpg';
import Box from '@mui/material/Box';

const images = [imgg, imggg, imggs];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: '1200px', bgcolor: 'red', height: '400px', overflow: 'hidden', border: '2px solid #95a5a6' }}>
      <img src={images[currentImage]} style={{ width: '100%', objectFit: 'cover', height: '400px' }}></img>
    </Box>
  );
};

export default ImageSlider;
