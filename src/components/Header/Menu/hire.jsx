import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Hire() {
  return (
    <Box>
      <Button
        id="basic-button-TourHue"
        aria-controls={open ? 'basic-menu-TourHue' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Thuê Xe Ô Tô Du Lịch Đà Nẵng
      </Button>
    </Box>
  );
}

export default Hire;
