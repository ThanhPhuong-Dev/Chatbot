import Box from '@mui/material/Box';
import logo from '~/assets/img/logo.png';
import TourDN from './Menu/tourDN';
import TourHue from './Menu/tourHue';
import TourHoiAn from './Menu/tourHoiAn';
import Hire from './Menu/hire';
import Ticket from './Menu/Ticket';
import Hotel from './Menu/hotel';
import Blog from './Menu/Blog';
function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.website.headerHeight,
        display: 'flex',
        alignItems: 'center',
        px: 3,
        bgcolor: '#2c3e50',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Box sx={{ height: (theme) => theme.website.headerHeight }}>
        <img src={logo} alt="" style={{ width: '70px', height: '70px' }}></img>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TourDN></TourDN>
        <TourHue></TourHue>
        <TourHoiAn></TourHoiAn>
        <Hire></Hire>
        <Ticket></Ticket>
        <Hotel></Hotel>
        <Blog></Blog>
      </Box>
    </Box>
  );
}

export default Header;
