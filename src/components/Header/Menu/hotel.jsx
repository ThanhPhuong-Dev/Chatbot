import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Hotel() {
  return (
    <Box>
      <Button
        id="basic-button-TourHue"
        aria-controls={open ? 'basic-menu-TourHue' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Khách Sạn
      </Button>
    </Box>
  );
}

export default Hotel;
