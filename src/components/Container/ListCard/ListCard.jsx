import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { IoTimeOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Typography from '@mui/material/Typography';

function ListCard({ data }) {
  return (
    <Card
      sx={{
        maxWidth: 240,
        minWidth: 240,
        cursor: 'pointer',
        borderRadius: '10px',
        boxShadow: '1px 1px 10px #95a5a6',
        '& .MuiCardContent-root': {
          padding: '10px',
        },
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <CardMedia
          sx={{
            transition: ' 0.5s',

            '&:hover': {
              transform: 'scale(2)',
            },
          }}
          component="img"
          height="194"
          image={data.image}
          alt="Paella dish"
        />
      </Box>
      <CardContent>
        <Typography sx={{ fontWeight: 600 }} variant="h8" color="text.primary">
          {data.title}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography
          sx={{ fontWeight: 600, mr: 1, display: 'flex', alignItems: 'center', gap: 1 }}
          variant="h8"
          color="text.primary"
        >
          <IoTimeOutline></IoTimeOutline>
          Thời Gian:
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="span" color="text.primary">
          {data.time}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography
          sx={{ fontWeight: 600, mr: 1, display: 'flex', alignItems: 'center', gap: 1 }}
          variant="h8"
          color="text.primary"
        >
          <FaRegCalendarAlt></FaRegCalendarAlt>
          Khởi Hành:
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="span" color="text.primary">
          {data.start}
        </Typography>
      </CardContent>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2 }}>
        <Button
          sx={{
            bgcolor: '#cca77f',
            transition: '0.5s',
            '&:hover': {
              bgcolor: '#2c3e50',
            },
          }}
          variant="contained"
        >
          Liên Hệ
        </Button>
      </Box>
    </Card>
  );
}

export default ListCard;
