import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Blog() {
  return (
    <Box>
      <Button
        id="basic-button-TourHue"
        aria-controls={open ? 'basic-menu-TourHue' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Blog Cẩm Nang Du Lịch
      </Button>
    </Box>
  );
}

export default Blog;
